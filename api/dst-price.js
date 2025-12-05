export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.gopax.co.kr/trading-pairs/dst-krw/ticker');
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ price: data.price });
  } catch (err) {
    res.status(500).json({ error: '시세 가져오기 실패', detail: err.message });
  }
}

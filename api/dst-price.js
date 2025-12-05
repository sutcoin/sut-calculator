export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.gopax.co.kr/trading-pairs/dst-krw/ticker');
    const data = await response.json();

    console.log("Gopax API 응답:", data);

    if (!data.price) {
      return res.status(500).json({ error: "price 필드 없음", raw: data });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ price: data.price });
  } catch (err) {
    console.error("API 호출 중 예외:", err);
    res.status(500).json({ error: '시세 가져오기 실패', detail: err.message });
  }
}

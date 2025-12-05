// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// CORS 허용 설정 + 고팍스 시세 중계
app.get('/api/dst-price', async (req, res) => {
  try {
    const response = await fetch('https://api.gopax.co.kr/trading-pairs/dst-krw/ticker');
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*'); // CORS 허용
    res.json({ price: data.price });
  } catch (err) {
    res.status(500).json({ error: '시세 가져오기 실패' });
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`프록시 서버 실행 중: http://localhost:${PORT}`);
});

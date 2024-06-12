const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors()); // CORS 설정 추가

const items = [
  { id: 1, name: '위니아 제습기', price: '25,000원', location: '부산 수영구 광안동', imageName: 'image1' },
  { id: 2, name: '갤럭시탭 s6', price: '70,000원', location: '서울 노원구 중계4동', imageName: 'image2' },
  { id: 3, name: '호두캐슈넛아몬드팔아요', price: '1,000원', location: '세종시 소담동', imageName: 'image3' },
  { id: 4, name: 'LG 24인치 일체형 컴퓨터 가...', price: '5,000원', location: '경기도 파주시 운정3동', imageName: 'image4' },
  { id: 5, name: '노지한라봉', price: '30,000원', location: '제주 서귀포시 안덕면', imageName: 'image5' },
  { id: 6, name: '농업용운반차', price: '300,000원', location: '충북 옥천군 동이면', imageName: 'image6' },
  { id: 7, name: '휴지30롤 팝니다 옆에 남은건..', price: '5,000원', location: '서울 도봉구 쌍문동', imageName: 'image7' },
  { id: 8, name: '애플 패드 + 터치펜 팝니다', price: '150,000원', location: '제주 제주시 노형동', imageName: 'image8' },
  { id: 9, name: '입생로랑 미니호보백', price: '260,000원', location: '서울 강남구 도곡동', imageName: 'image9' },
];

// 여러 이미지 파일을 제공할 엔드포인트 설정
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/image/:imageName', (req, res) => {
  const imageName = req.params.imageName; // 경로 매개변수로 이미지 이름 받기
  const imagePath = path.join(__dirname, 'image-api', 'images', `${imageName}.png`); // 이미지 파일 경로 설정
  
  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send('이미지를 찾을 수 없습니다.');
    }
  });
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

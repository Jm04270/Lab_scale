<template>
  <div>
    <section class="banner">
      <h1>믿을만한 이웃 간 중고거래</h1>
      <p>동네 주민들과 거리를 두고 안전한 거래를 지금 경험해보세요.</p>
    </section>
    <section class="items">
      <h2>중고거래 인기매물</h2>
      <div class="item-list">
        <div class="item" v-for="item in items" :key="item.id">
          <img :src="item.image" :alt="item.name">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }}원</p>
          <p>{{ item.location }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TradeContent',
  data() {
    return {
      items: [
        { id: 1, name: '위닉스 제습기', price: 250000, location: '연동', image: require('@/assets/image1.png') },
        { id: 2, name: '갤럭시 S9', price: 70000, location: '삼양동', image: require('@/assets/image2.png') },
        { id: 3, name: '호두와 견과류 한 박스', price: 10000, location: '아라동', image: require('@/assets/image3.png') },
        { id: 4, name: 'LG 모니터 일체형 컴퓨터', price: 50000, location: '노형동', image: require('@/assets/image4.png') },
        { id: 5, name: '노지감귤', price: 20000, location: '이도2동', image: require('@/assets/image5.png') },
        { id: 6, name: '중고 전동차', price: 300000, location: '외도동', image: require('@/assets/image6.png') },
        { id: 7, name: '휴지', price: 6000, location: '연동', image: require('@/assets/image7.png') },
        { id: 8, name: '애플 패드 + 키보드 팝니다', price: 100000, location: '아라동', image: require('@/assets/image8.png') },
        { id: 9, name: '여성용 미니백', price: 20000, location: '노형동', image: require('@/assets/image9.png') },
      ]
    }
  }
}
</script>

<style scoped>
.banner {
  text-align: center;
  padding: 40px;
  background-color: #f1f1f1;
}

.items {
  padding: 20px;
}

.item-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  gap: 20px;
}

.item {
  width: calc(33.333% - 20px); /* 3개씩 배치될 수 있도록 설정 */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-sizing: border-box; /* 패딩과 보더를 포함한 크기 계산 */
}

.item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.item h3 {
  margin: 10px 0;
  font-size: 18px;
}

.item p {
  margin: 5px 0;
  color: #777;
}
</style>

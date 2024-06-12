<template>
  <div>
    <section class="banner">
      <h1>믿을만한 이웃 간 중고거래</h1>
      <p>동네 주민들과 가깝고 안전한 거래를 지금 경험해보세요.</p>
    </section>
    <section class="items">
      <h2>중고거래 인기매물</h2>
      <div class="item-list">
        <div class="item" v-for="item in items" :key="item.id">
          <img :src="item.imageUrl" :alt="item.name">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }}</p>
          <p>{{ item.location }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TradeContent',
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get('http://localhost:3000/api/items');
        const items = response.data;
        for (let item of items) {
          const imageResponse = await axios.get(`http://localhost:3000/api/image/${item.imageName}`, {
            responseType: 'blob',
          });
          item.imageUrl = URL.createObjectURL(imageResponse.data);
        }
        this.items = items;
      } catch (error) {
        console.error(error);
        alert('데이터를 가져오는 데 실패했습니다.');
      }
    },
  },
  created() {
    this.fetchItems();
  },
};
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

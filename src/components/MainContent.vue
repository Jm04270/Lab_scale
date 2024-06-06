<template>
  <StyledMainContainer>
    <Section class="section1">
      <LeftContentMain1>
        <h1>당신 근처의 <br> 지역생활 커뮤니티</h1>
        <p>동네라서 가까운 것 <br> 당근에서 가까운 이웃과 함께해요</p>
        <AppButton>
          <img src="@/assets/googleplay.png" alt="Google Play 아이콘" class="button-icon"/>
          Google Play
        </AppButton>
        <AppButton>
          <img src="@/assets/appstore.png" alt="App Store 아이콘" class="button-icon"/>
          App Store
        </AppButton>
      </LeftContentMain1>
      <RightContentMain1>
        <img src="@/assets/carrot-main.png" alt="Main 첫번째 화면" />
      </RightContentMain1>
    </Section>

    <div v-if="loading" class="loading">로딩 중...</div>
    <div v-else>
      <div v-for="(item, index) in items" :key="index" class="item">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>

    <MainContentMain2 class="section2">
      <ImageContainer>
        <img src="@/assets/carrot-main2.png" alt="Main 두번째 화면" class="background-image"/>
      </ImageContainer>
      <TextAndButtons>
        <TrustableContent>
          <p class="p_main1">중고거래</p>
          <p class="p_main2">믿을만한 <br> 이웃 간 중고거래</p>
          <p class="p_main3">동네 주민들과 가깝고 따뜻한 거래를 <br> 지금 경험해보세요.</p>
        </TrustableContent>
        <ButtonsArea>
          <PopularItemButton>인기매물 보기</PopularItemButton>
          <TrustableTradeButton>믿을 수 있는 중고거래</TrustableTradeButton>
        </ButtonsArea>
      </TextAndButtons>
    </MainContentMain2>

    <Section class="section3">
      <LeftContent>
        <p class="p_main4">동네생활</p>
        <p class="p_main5">이웃만 아는 동네 정보와 이야기</p>
        <p class="p_main6">우리 동네의 다양한 이야기를 이웃과 함께 나눠보세요.</p>
        <ActionButton>인기매물 보기</ActionButton>
        <ActionButton>믿을 수 있는 중고거래</ActionButton>
      </LeftContent>
      <RightContent>
        <img src="@/assets/maincontent3.png" alt="동네 생활 이미지" />
      </RightContent>
    </Section>
  </StyledMainContainer>
</template>

<script>
import StyledMainContainer from "./styled-main/StyledMainContainer";
import Section from './styled-main/Section';
import LeftContent from './styled-main/LeftContent';
import RightContent from './styled-main/RightContent';
import ActionButton from './styled-main/ActionButton';
import AppButton from './styled-main/AppButton';
import LeftContentMain1 from './styled-main/LeftContentMain1';
import RightContentMain1 from './styled-main/RightContentMain1';
import MainContentMain2 from './styled-main/MainContentMain2';
import ImageContainer from './styled-main/ImageContainer';
import TextAndButtons from './styled-main/TextAndButtons';
import TrustableContent from './styled-main/TrustableContent';
import ButtonsArea from './styled-main/ButtonsArea';
import PopularItemButton from './styled-main/PopularItemButton';
import TrustableTradeButton from './styled-main/TrustableTradeButton';

import axios from 'axios';

export default {
  name: 'MainContent',
  components: {
    StyledMainContainer,
    Section,
    LeftContent,
    RightContent,
    ActionButton,
    AppButton,
    LeftContentMain1,
    RightContentMain1,
    MainContentMain2,
    ImageContainer,
    TextAndButtons,
    TrustableContent,
    ButtonsArea,
    PopularItemButton,
    TrustableTradeButton,
  },
  data() {
    return {
      loading: false,
      items: []
    };
  },
  methods: {
    fetchData() {
      this.loading = true; // 로딩 표시를 나타내기 위해 loading을 true로 설정
      axios.get('/api/homelistdatas') // vue.config.js에 정의된 '/api' 프록시 사용
        .then(response => {
          this.items = response.data; // 응답 데이터를 items에 업데이트
        })
        .catch(error => {
          console.error('데이터를 가져오는 중 오류 발생:', error);
        })
        .finally(() => {
          this.loading = false; // 요청이 완료된 후 loading을 false로 설정
        });
    }
  }
};
</script>

<style scoped>
.section1 {
  background-color: #FFFAE0;
  padding: 40px 0;
}

.section2 {
  background-color: #FFFFFF;
  padding: 40px 0;
}

.section3 {
  background-color: #FDF8F2;
  padding: 40px 0;
}

.loading {
  text-align: center;
  font-size: 20px;
  color: #FF8A00;
  font-weight: bold;
}
</style>

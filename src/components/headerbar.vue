<template>
  <StyledHeader>
    <LogoAndText>
      <div class="logo-and-text">
        <router-link to="/" class = "logo-link">
          <img src="@/assets/carrot-logo.png" alt="당근마켓 로고" class="logo"/>
          <span class="logo-text">당근</span>
        </router-link>
        <router-link to="/trade" class="trade-text">중고거래</router-link>
      </div>
    </LogoAndText>

    <SearchContainer>
      <SearchInput type="text" class="search-input" placeholder="물품이나 동네를 검색해보세요"/>
      <WhiteButton as="button" @click="fetchData">검색하기</WhiteButton>
    </SearchContainer>

    <UserActions>
      <OrangeButton>로그인</OrangeButton>
      <router-link to="/chat">
        <WhiteButton>채팅하기</WhiteButton> 
      </router-link>
    </UserActions>
  </StyledHeader>
</template>

<script>
import StyledHeader from './styled/StyledHeader';
import LogoAndText from './styled/logoandtext';
import SearchContainer from './styled/searchContainer';
import SearchInput from './styled/searchInput';
import WhiteButton from './styled/whitebutton';
import UserActions from './styled/userActions';
import OrangeButton from './styled/orangebutton';

export default {
  name: 'HeaderBar',
  components: {
    StyledHeader,
    LogoAndText,
    SearchContainer,
    SearchInput,
    WhiteButton,
    OrangeButton,
    UserActions
  },
  methods: {
    fetchData() {
      // 검색 데이터 가져오기 로직
    }
  }
};
</script>

<style scoped>
  .logo-link{
    text-decoration: none;
  }
  .trade-text{
    text-decoration: none;
    color : #999999;
  }
</style>

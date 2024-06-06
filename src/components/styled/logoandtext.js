import styled from 'vue3-styled-components';

const LogoAndText = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  .logo {
    height: 40px;
    /* padding-left: 300px; */
    margin-right: 8px; /* 로고와 "당근" 텍스트 사이의 간격 */
  }

  .logo-text {
    color: #FF8A00;
    font-size: 20px;
    font-weight: bold;
  }

  .trade-text {
    font-size: 16px;
    font-weight: 900;
    margin-left: 8px; /* "당근"과 "중고거래" 텍스트 사이 간격 */
  }
`;

export default LogoAndText;

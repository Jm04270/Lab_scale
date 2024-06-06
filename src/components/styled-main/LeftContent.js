import styled from 'vue3-styled-components';

const LeftContent = styled.div`
  flex: 1;
  padding: 0 20px;

  img {
    width: 100%;
    max-width: 300px; /* 적절한 이미지 크기로 조정 */
    height: auto;
  }

  .p_main4, .p_main5, .p_main6, .p_main7, .p_main8, .p_main9, .p_main10, .p_main11, .p_main12 {
    margin-bottom: 10px;
  }

  .p_main4, .p_main7, .p_main10 {
    font-size: 24px;
    font-weight: bold;
    color: #FF8A00;
  }

  .p_main5, .p_main8, .p_main11 {
    font-size: 20px;
    font-weight: 600;
  }

  .p_main6, .p_main9, .p_main12 {
    font-size: 16px;
  }
`;

export default LeftContent;

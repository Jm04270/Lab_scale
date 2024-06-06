import styled from 'vue3-styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center; /* 중앙 정렬을 기본으로 설정 */
  align-items: center;
  padding: 40px 0; /* 섹션의 위아래 패딩을 추가하여 간격 조정 */
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  & > div {
    flex: 0 1 45%; /* 섹션 내부 요소의 크기를 조정 */
    padding: 0 10px; /* 섹션 내부 요소의 좌우 패딩 */
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto; /* 이미지 중앙 정렬 */
  }
`;

export default Section;

import styled from 'vue3-styled-components';

const StyledActionButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  font-weight: bold;
  cursor: pointer;
  background-color: #FF8A00;
  color: white;
  margin-right: 5px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default StyledActionButton;

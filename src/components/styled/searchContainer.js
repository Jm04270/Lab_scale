import styled from 'vue3-styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 600px;
  margin-left: -300px;

  .search-input {
    padding: 8px;
    border: 0.5px solid #999999;
    background-color: #D9D9D9;
    font-weight: 600;
    text-align: center;
    border-radius: 6px;
    margin-right: 10px;
    flex-grow: 1;
  }

  .search-button {
    padding: 8px 16px;
    border: 0.5px solid #BCBCBC;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
  }
`;

export default SearchContainer;

import styled from 'vue3-styled-components';

const UserActions = styled.div`
  display: flex;

  .login-button {
    background-color: #FF8A00;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    margin-right: 10px;
    cursor: pointer;
  }

  .chat-button {
    border: 0.5px solid #BCBCBC;
    border-radius: 4px;
    background-color: white;
    padding: 8px 16px;
    cursor: pointer;
  }
`;

export default UserActions;

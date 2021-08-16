import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  padding: 30px 30px;
  flex-direction: column;
  background-color: var(--gray-light);
  width: 100%;
  height: auto;
  border-radius: 5px;
  overflow: none;

  .form-heading {
    display: flex;
    align-items: center;
    font-size: 15px;
  }

  .two {
    margin-top: 15px;
  }

  .icons {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .wand-icon {
    transform: scaleX(-1);
  }

  .error-message {
    margin-top: 5px;
    color: var(--red);
    margin-left: 20px;
    font-size: 14px;
  }

  .textfield {
    color: var(--blue);
    font-size: 18px;
    border-radius: 5px;
    padding: 3px 20px;
    height: 50px;
    margin-top: 15px;
    width: 100%;
    outline: none;
    border: none;
  }

  button {
    border-radius: 5px;
    margin-top: 15px;
    font-size: 18px;
    cursor: pointer;
    color: var(--white);
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    background-color: var(--blue);
  }
`;

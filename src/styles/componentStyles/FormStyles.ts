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
    padding: 3px 20px;
    outline: none;
    border: none;
  }

  button {
    cursor: pointer;
    color: var(--white);
    border: none;
    outline: none;
    background-color: var(--blue);
  }

  .input {
    font-size: 18px;
    font-weight: 400;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    margin-top: 15px;
  }

  .long-url {
    color: var(--blue);
    background-color: var(--white-pure);
    padding: 10px 20px;
    min-height: 50px;
    height: auto;
    display: flex;
    align-items: center;
    word-break: break-word;
    word-wrap: break-word;
  }

  .make-another-url {
    cursor: pointer;
    background-color: var(--blue);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

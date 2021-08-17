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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input {
    font-size: 18px;
    font-weight: 400;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    margin-top: 15px;
  }

  .url-shortened {
    color: var(--blue);
    background-color: var(--white-pure);
    padding: 10px 20px;
    min-height: 50px;
    height: auto;
    display: flex;
    align-items: center;
    word-break: break-word;
    word-wrap: break-word;
    font-weight: 600;
  }

  .copy {
    background-color: var(--blue);
    color: var(--white);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .make-another-url {
    cursor: pointer;
    background-color: var(--blue);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lds-ellipsis {
    position: relative;
    width: 40px;
    height: 40px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 35%;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--white);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 24px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 48px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

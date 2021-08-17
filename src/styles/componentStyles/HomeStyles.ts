import styled from 'styled-components';

export const StyledHome = styled.section`
  padding: 0 var(--rl-space);
  height: calc(100vh - (150px));
  display: flex;
  margin: 0 auto;
  max-width: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 500px) {
    padding: 0 20px;
  }

  .home-text {
    text-align: center;
    margin-bottom: 30px;

    p {
      font-weight: 600;
    }
  }

  .brand {
    color: var(--blue);
  }
`;

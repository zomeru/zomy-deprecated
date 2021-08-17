import styled from 'styled-components';

export const StyledNav = styled.header`
  padding: 0 var(--rl-space);

  @media only screen and (max-width: 500px) {
    padding: 0 20px;
  }

  nav {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;

    .link:not(:last-child) {
      margin-right: 20px;
    }
  }

  .logo {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 30px;
  }
`;

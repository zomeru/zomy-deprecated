import { css } from 'styled-components';

const Variables = css`
  :root {
    // Font
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    // Colors
    --white-pure: #fff;
    --white: hsl(206, 12%, 95%);
    --black: #191919;
    --gray-light: #e0e2e3;
    --gray: #7f7f7f;
    --blue: #2c87c5;
    --red: #c31818;

    // Other
    --max-width: 1300px;
    --transition: all 0.25s ease-in-out;
    --rl-space: 50px;
  }
`;

export default Variables;

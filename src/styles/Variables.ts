import { css } from 'styled-components';

const Variables = css`
  :root {
    // Font
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    // Colors
    --white-pure: #fff;
    --white: hsl(206, 12%, 95%);
    --black: #191919;
    --gray-light: #e0e2e3;
    --gray: #7f7f7f;
    --blue: #2c87c5;

    // Other
    --max-width: 1300px;
    --transition: all 0.25s ease-in-out;
    --rl-space: 50px;
  }
`;

export default Variables;

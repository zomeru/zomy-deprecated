import React from 'react';
import { StyledFooter } from '../styles/componentStyles/FooterStyles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <StyledFooter>
      <a href='https://github.com/zomeru' target='_blank' rel='noreferrer'>
        &copy; 2021 Zomy | Zomer Gregorio. All rights reserved.
      </a>
    </StyledFooter>
  );
};

export default Footer;

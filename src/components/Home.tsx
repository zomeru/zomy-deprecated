import React from 'react';
import { StyledHome } from '../styles/componentStyles/HomeStyles';
import Form from './Form';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <StyledHome>
      <Form />
    </StyledHome>
  );
};

export default Home;

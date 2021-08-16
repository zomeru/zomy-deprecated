import React from 'react';
import Form from './Form';
import Nav from './Nav';
import { StyledHome } from '../styles/componentStyles/HomeStyles';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Nav />
      <StyledHome>
        <Form />
      </StyledHome>
    </>
  );
};

export default Home;

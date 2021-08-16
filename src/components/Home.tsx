import React, { useState, FormEvent } from 'react';
import db from '../firebase';
import { customAlphabet } from 'nanoid';
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

// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Form from './Form';
import Nav from './Nav';
import Footer from './Footer';
import { StyledHome } from '../styles/componentStyles/HomeStyles';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [height, setHeight] = useState<Number | null>(null);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, [height]);

  return (
    <>
      <Nav />
      <main>
        <StyledHome isInputFocus={isInputFocus} height={height}>
          <div className='home-text'>
            <h1>
              Welcome to <span className='brand'>Zomy</span>
            </h1>
            <p>Your free link shortener.</p>
          </div>
          <Form setIsInputFocus={setIsInputFocus} />
        </StyledHome>
      </main>
      <Footer />
    </>
  );
};

export default Home;

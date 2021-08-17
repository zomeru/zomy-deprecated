import React from 'react';
import Form from './Form';
import Nav from './Nav';
import Footer from './Footer';
import { StyledHome } from '../styles/componentStyles/HomeStyles';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Nav />
      <main>
        <StyledHome>
          <div className='home-text'>
            <h1>
              Welcome to <span className='brand'>Zomy</span>
            </h1>
            <p>Your free link shortener.</p>
          </div>
          <Form />
        </StyledHome>
      </main>
      <Footer />
    </>
  );
};

export default Home;

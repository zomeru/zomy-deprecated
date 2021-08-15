import React, { useState, FormEvent } from 'react';
import db from '../firebase';
import { customAlphabet } from 'nanoid';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [url, setUrl] = useState<string>('');
  const [isShorten, setIsShorten] = useState<boolean>(false);

  let id;
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsShorten(true);
    const nanoid = customAlphabet(
      'ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuv1234567890',
      5,
    );
    id = nanoid();
    db.collection('urls').doc(id).set({
      url: url,
    });
    setTimeout(() => {
      setIsShorten(false);
    }, 10000);
  };

  return (
    <div>
      <form action='' onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder='Enter the url here'
        />
        {isShorten && (
          <div>
            This is your url: {window.location.host}/r/${id}
          </div>
        )}
        <input type='submit' value='Shorten the url' />
      </form>
    </div>
  );
};

export default Home;

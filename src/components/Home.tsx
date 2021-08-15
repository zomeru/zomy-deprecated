import React, { useState, FormEvent } from 'react';
import db from '../firebase';
import { customAlphabet } from 'nanoid';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [url, setUrl] = useState<string>('');

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nanoid = customAlphabet(
      'ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuv1234567890',
      5,
    );
    const id = nanoid();
    db.collection('urls').doc(id).set({
      url: url,
    });
    alert(`This is your url: ${window.location.host}/${id}`);
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
        <input type='submit' value='Shorten the url' />
      </form>
    </div>
  );
};

export default Home;

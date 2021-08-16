import React, { useState, FormEvent } from 'react';
import db from '../firebase';
import { customAlphabet } from 'nanoid';
import { AiOutlineLink } from 'react-icons/ai';
import { IoMdColorWand } from 'react-icons/io';
import validator from 'validator';
import { StyledForm } from '../styles/componentStyles/FormStyles';

interface FormProps {}

const nanoid = customAlphabet(
  'ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuv1234567890',
  5,
);

const Form: React.FC<FormProps> = ({}) => {
  const [url, setUrl] = useState<string>('');
  const [alias, setAlias] = useState<string>('');
  const [isShorten, setIsShorten] = useState<boolean>(false);
  const [tag, setTag] = useState<string>('');
  const [errorURL, setErrorURL] = useState<string>('');

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = nanoid();
    setTag(id);
    db.collection('urls').doc(id).set({
      url: url,
    });
    setIsShorten(true);
    setTimeout(() => {
      setIsShorten(false);
    }, 10000);
  };

  const validate = (value: string) => {
    if (!validator.isURL(value)) {
      setErrorURL('Please enter a valid URL');
    }
  };

  return (
    <StyledForm action='' onSubmit={handleFormSubmit}>
      <div className='form_heading one'>
        <AiOutlineLink className='icons' />
        <h3>Enter a URL to make it short.</h3>
      </div>
      <input
        className='textfield'
        type='url'
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder='Enter the url here'
      />
      <div className='form_heading two'>
        <IoMdColorWand className='icons wand-icon' />
        <h3>Customize your link (Optional)</h3>
      </div>
      <input
        className='textfield'
        type='text'
        value={alias}
        onChange={e => setAlias(e.target.value)}
        placeholder='Custom Alias'
      />
      <button type='submit' disabled>
        Shorten URL
      </button>
      {isShorten && (
        <div>
          This is your url: {window.location.host}/{tag}
        </div>
      )}
    </StyledForm>
  );
};

export default Form;

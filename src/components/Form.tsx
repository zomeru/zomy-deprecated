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
  const [isEmptyURL, setIsEmptyURL] = useState<boolean>(false);
  const [alias, setAlias] = useState<string>('');
  const [isShorten, setIsShorten] = useState<boolean>(false);
  const [tag, setTag] = useState<string>('');
  const [isValidURL, setIsValidURL] = useState<boolean>(false);
  const [isValidAlias, setIsValidAlias] = useState<boolean>(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidURL && (alias.length === 0 || isValidAlias)) {
      const id = nanoid();
      setTag(id);
      db.collection('urls')
        .doc(isValidAlias ? alias : id)
        .set({
          url: url,
        });
      setIsShorten(true);
      setTimeout(() => {
        setIsShorten(false);
      }, 10000);
    }

    if (url.length <= 0) {
      setIsEmptyURL(true);
    } else {
      setIsEmptyURL(false);
    }
  };

  const validateURL = (value: string) => {
    if (validator.isURL(value) && value.length > 0) {
      setIsValidURL(true);
    } else {
      setIsValidURL(false);
    }
  };

  const validateAlias = (value: string) => {
    if (validator.isAlphanumeric(value) && value.length >= 5) {
      setIsValidAlias(true);
    } else {
      setIsValidAlias(false);
    }
  };

  return (
    <StyledForm action='' onSubmit={handleFormSubmit}>
      <div className='form-heading one'>
        <AiOutlineLink className='icons' />
        <h3>Enter a URL to make it short.</h3>
      </div>
      <input
        className='textfield'
        type='text'
        value={url}
        onChange={e => {
          if (e.target.value.length > 0) {
            setIsEmptyURL(false);
          }
          validateURL(e.target.value);
          setUrl(e.target.value);
        }}
        placeholder='Enter the url here'
      />
      {isEmptyURL && <p className='error-message'>The URL field is required</p>}
      {!isValidURL && url.length > 0 && (
        <p className='error-message'>Please enter a valid URL</p>
      )}
      <div className='form-heading two'>
        <IoMdColorWand className='icons wand-icon' />
        <h3>Customize your link (Optional)</h3>
      </div>
      <input
        className='textfield'
        type='text'
        value={alias}
        onChange={e => {
          validateAlias(e.target.value);
          setAlias(e.target.value);
        }}
        placeholder='Custom Alias'
      />
      {!isValidAlias && alias.length > 0 && (
        <p className='error-message'>
          Alias must be at least 5 alphanumeric characters
        </p>
      )}
      <button type='submit'>Shorten URL</button>
      {isShorten && (
        <div>
          This is your url: {window.location.host}/{isValidAlias ? alias : tag}
        </div>
      )}
    </StyledForm>
  );
};

export default Form;

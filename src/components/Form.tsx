import React, { useState } from 'react';
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
  const [isAliasTaken, setIsAliasTaken] = useState<boolean>(false);

  const [isShorten, setIsShorten] = useState<boolean>(false);
  const [tag, setTag] = useState<string>('');
  const [isValidURL, setIsValidURL] = useState<boolean>(false);
  const [isValidAlias, setIsValidAlias] = useState<boolean>(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidURL && (alias.length === 0 || isValidAlias)) {
      // If no custom alias is set
      if (alias.length <= 0) {
        // Generated random id
        let id = nanoid();
        setTag(id);

        // Check if generated id is already in the database
        let docRef = db.collection('urls').doc(id);
        let data = (await docRef.get()).data();

        // If generated id is already in the database, it will generated new id
        while (data) {
          id = nanoid();
          setTag(id);
          docRef = db.collection('urls').doc(id);
          data = (await docRef.get()).data();
        }

        // Set id and url in the database
        db.collection('urls').doc(id).set({
          url: url,
        });

        // If custom alias is set
      } else {
        const docRef = db.collection('urls').doc(alias);
        const data = (await docRef.get()).data();

        // If custom alias is not taken, set to database
        if (!data && isValidAlias) {
          db.collection('urls').doc(alias).set({
            url: url,
          });

          // If custom alias is already taken, show an error message
        } else {
          setIsAliasTaken(true);
          return;
        }
      }

      setIsShorten(true);

      //
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

  const handleURLFieldOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setIsEmptyURL(false);
    }
    validateURL(e.target.value);
    setUrl(e.target.value);
  };

  const handleAliasFieldOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAlias(e.target.value);
    setAlias(e.target.value.replaceAll(/ /g, ''));
    setIsAliasTaken(false);
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
        onChange={handleURLFieldOnChange}
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
        onChange={handleAliasFieldOnChange}
        placeholder='Custom Alias'
      />
      {!isValidAlias && alias.length > 0 && (
        <p className='error-message'>
          Alias must be at least 5 alphanumeric characters
        </p>
      )}
      {isAliasTaken && <p className='error-message'>Alias already taken</p>}
      <button type='submit'>Shorten URL</button>
      {isShorten && !isAliasTaken && (
        <div>
          This is your url: {window.location.host}/{isValidAlias ? alias : tag}
        </div>
      )}
    </StyledForm>
  );
};

export default Form;

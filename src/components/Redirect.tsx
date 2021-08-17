import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import db from '../firebase';
import { StyledRedirect } from '../styles/componentStyles/RedirectStyles';

interface RedirectProps {}

type CodeParms = {
  id: string;
};

const Redirect: React.FC<RedirectProps> = ({}) => {
  const { id } = useParams<CodeParms>();
  const history = useHistory();

  const getFirebaseData = async () => {
    const docRef = db.collection('urls').doc(id);
    const data = await (await docRef.get()).data();

    // setTimeout(() => {
    //   if (!data) {
    //     alert('Invalid URL');
    //     history.push('/');
    //   } else {
    //     window.location.replace(data.url as string);
    //   }
    // }, 1000);
  };

  useEffect(() => {
    getFirebaseData();
  }, []);

  return (
    <StyledRedirect>
      <span>Redirecting</span>
      <div className='lds-hourglass'></div>
    </StyledRedirect>
  );
};

export default Redirect;

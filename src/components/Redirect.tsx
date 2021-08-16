import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import db from '../firebase';

interface RedirectProps {}

type CodeParms = {
  id: string;
};

const Redirect: React.FC<RedirectProps> = ({}) => {
  const { id } = useParams<CodeParms>();
  const history = useHistory();
  const host = window.location.host;

  const getFirebaseData = async () => {
    const docRef = db.collection('urls').doc(id);

    const data = await (await docRef.get()).data();

    console.log(data);

    if (!data) {
      history.push('/');
    } else {
      window.location.replace(data.url as string);
    }
  };

  useEffect(() => {
    getFirebaseData();
  }, []);

  return <div></div>;
};

export default Redirect;

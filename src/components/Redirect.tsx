import React, { useEffect } from 'react';
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

    if (!data) {
      alert('Invalid URL');
      history.push('/');
    } else {
      if (data.url.indexOf('http') > -1) {
        window.location.replace(data.url as string);
      } else {
        window.location.replace(`http://${data.url}`);
      }
    }
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

import React from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
  const email = new URLSearchParams(search).get('email');

  return (
    <div>
      <h1>Welcome {name}!</h1>
      <p>Your email: {email}</p>
    </div>
  );
};

export default Welcome;

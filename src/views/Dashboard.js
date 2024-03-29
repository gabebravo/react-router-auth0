// src/components/Profile.js

import React from 'react';
import { useAuth0 } from '../auth/react-auth0-wrapper';
import Header from '../components/Header';

const Dashboard = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header user={user} headerText="Fitness App" />
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
};

export default Dashboard;

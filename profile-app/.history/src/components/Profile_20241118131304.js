import React from 'react';

const Profile = ({ id, name, age, gender, occupation }) => {
  return (
    <div>
      <h2>name: {name}</h2>
      <h3>age: {age}</h3>
      <h3>gender: {gender}</h3>
      <h3>occupation: {occupation}</h3>
    </div>
  );
};

export default Profile;

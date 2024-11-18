import React from 'react';

const Profile = ({ id, name, age, gender, occupation }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Occupation: {occupation}</h3>
    </div>
  );
};

export default Profile;

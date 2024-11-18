import React from 'react';
import Card from '../card/Card';
import './Profile.scss';

const Profile = ({ id, name, age, gender, occupation, image }) => {
  return (
    <Card>
      <div className="profil-card">
        <img src={image} alt="profile" />
        <h2>Name: {name}</h2>
        <h3>Age: {age}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Occupation: {occupation}</h3>
      </div>
    </Card>
  );
};

export default Profile;
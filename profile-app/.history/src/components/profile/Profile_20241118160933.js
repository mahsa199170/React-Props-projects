import React from 'react';
import Card from '../card/Card';
import './Profile.scss';

const Profile = ({ id, name, age, gender, occupation, image }) => {
  return (
    <Card>
      <div className="profil-card">
        <div className="profile-image"></div>
        <img src={image} alt="profile" />
        <div>
          <h3>Name: {name}</h3>
          <h3>Age: {age}</h3>
          <h3>Gender: {gender}</h3>
          <h3>Occupation: {occupation}</h3>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
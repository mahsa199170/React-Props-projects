import React from 'react';
import Card from '../card/Card';
import './Profile.scss';
import imag1 from '../images/100.png';
import imag2 from '../images/54.png';
import imag1 from '../images/73.png';
import imag1 from '../images/94.png';

const Profile = ({ id, name, age, gender, occupation }) => {
  return (
    <Card>
      <div className="profile-image">
        <img src={imag1} alt="profile" />
      </div>
      <div className="profil-info">
        <h2>Name: {name}</h2>
        <h3>Age: {age}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Occupation: {occupation}</h3>
      </div>
    </Card>
  );
};

export default Profile;

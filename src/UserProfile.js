import React from 'react';
import './layout.css';

const UserProfile = ({name, img, description,github}) => {


  return(
    <div className="split left">
      <img className="ui small circular image" style={{borderRadius: '50%', width: '40vh'}} src={img} alt={img}/>
      <h2> {name}</h2>
      <h4>{description}</h4>
      <p>{github}</p>
      <button style={{width: '46vh', borderRadius: '80px'}}>Edit Profile</button>
    </div>
  )
};

export default UserProfile;

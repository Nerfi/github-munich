import React from 'react';
import './layout.css';

const UserProfile = ({name, img, description,github}) => {


  return(
    <div className="column">

      <img className="ui small circular image" style={{borderRadius: '50%', width: '35vh'}} src={img} alt={img}/>

      {/* DEJAR para otro momento la img de al lado de la foto*/}
      <div className="js-user-status">
        <i className="fa fa-smile-o fa-2x" aria-hidden="true"></i>
      </div>

      <h2> {name}</h2>
      <p>{github}</p>
      <h4 className="description">{description}</h4>
      <button style={{width: '46vh', borderRadius: '80px'}}>Edit Profile</button>
    </div>
  )
};

export default UserProfile;

import React, {useState, useEffect} from 'react';
import './styles/renderRepos.css';

const RenderData = ({repos}) => {

    const changeDate = date => {
    const desiredDate = new Date(date);
    const dateString = desiredDate.toDateString();
    return dateString;

  };
  return (

      repos.map(repo => {
        return (
             <div className="user-repositories-list">

          <ul>
          <div className="d-inline-block" >

            <li className="d-flex width-full p-4"><h1>{repo.name}</h1></li>
            <li className="d-flex p-4"><h3>{repo.description}</h3></li>

            <div className="f6 text-grey mt-2">

              <li className="d-flex p-4">{repo.language}</li>
              <li className="d-flex p-4">updated {changeDate(repo.pushed_at)}</li>
            </div>

          </div>

          </ul>


      </div>

        )
      })


  )
}


export default RenderData;

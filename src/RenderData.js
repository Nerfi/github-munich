import React, {useState} from 'react';
import './styles/renderRepos.css';


/* This comoponent mission is to display and
  <ul>
  <li>/li>
  </ul>
  on which we will display the data given to this component by is father , RenderRepos
  the data display will depend on the action taken by the user, if the user typed in a query on the inpt field
  the component will render the response from that API, otherwise will render the default repositories of the
  given user */

const RenderData = ({repos, repo}) => {

    const changeDate = date => {

    const desiredDate = new Date(date);
    const dateString = desiredDate.toDateString();
    return dateString;

  };

  let displayData;



  if(repos) {

       displayData = repos.map(repo => {
        return (
      <div key={repo.id} className="user-repositories-list">

          <ul >
          <div className="d-inline-block" >

            <li  className="d-flex width-full p-4"><h1>{repo.name}</h1></li>
            <li  className="d-flex p-4"><h3>{repo.description}</h3></li>

            <div className="f6 text-grey mt-2">

              <li  className="d-flex p-4">{repo.language}</li>
              <li  className="d-flex p-4">updated {changeDate(repo.pushed_at)}</li>
            </div>

          </div>

          </ul>


      </div>

        )
      })


  } else {

      displayData = repo.items.map(repo => {
        return (
      <div  key={repo.id} className="user-repositories-list">

          <ul key={repo}>
          <div className="d-inline-block" >

            <li  className="d-flex width-full p-4"><h1>{repo.name}</h1></li>
            <li  className="d-flex p-4"><h3>{repo.description}</h3></li>

            <div className="f6 text-grey mt-2">

              <li  className="d-flex p-4">{repo.language}</li>
              <li  className="d-flex p-4">updated {changeDate(repo.pushed_at)}</li>
            </div>

          </div>

          </ul>


      </div>

        )
      })

  }

  return (
    <div>

     {displayData }

    </div>




  )
}


export default RenderData;

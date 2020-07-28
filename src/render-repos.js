import React, {useState, useEffect} from 'react';
import './styles/renderRepos.css';

const RenderRepos = ({repo}) => {

  const [repos, setRepos] = useState([]);


  useEffect(() => {

    const getRepos = async () => {
      try {
        const getData = await fetch('https://api.github.com/users/rodrigopk/repos');
        const response = await getData.json();

        setRepos(response);
      } catch(e) {
        console.log(e,'this is the error');
      }
    };

    getRepos();

  }, [repo]);

  console.log(repos,  'repos prop is here')

  const changeDate = date => {
    const desiredDate = new Date(date);
    const dateString = desiredDate.toDateString();
    return dateString;

  };

  if (repo.items) {
    return(
      <div>
        {repo.items.map(repo => {
          return(

            <div className="searchedRepos">

             <h2 className="repoName">{repo.name}</h2>
              <p className="description">{repo.description}</p>
              <p>{repo.language} this is the language</p>
              <p className="no-wrap">{changeDate(repo.pushed_at)}</p>

            </div>
          )
        })}
      </div>
    )

  }

  if (repos) {
    // aqui me falta
    return(
    <div>
    {repos.map(repo => {
      return(
      <div className="user-repositories-list">

        <ul>
          <li>{repo.name}</li>
          <li>{repo.language}</li>
          <li>{changeDate(repo.pushed_at)}</li>
          <li>{repo.description}</li>
        </ul>


      </div>

      )
    })}
    </div>
    )
  }

  return <>Not found</>
};

export default RenderRepos;

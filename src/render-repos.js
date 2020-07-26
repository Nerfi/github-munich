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

  console.log(repo,  'repo prop is here')

  if (repo.items) {
    return(
      <div>
        {/*repo.items.map(repo => <p>{repo.name}</p>  )*/}

        {repo.items.map(repo => {
          return(
            <div>
             <h2 className="repoName">{repo.name}</h2>
            <p className="description">{repo.description}</p>

            </div>
          )
        })}
      </div>
    )

  }

  if (repos) {
    return <>{repos.map(repo => <p>{repo.full_name}</p>)})</>
  }

  return <>Not found</>
};

export default RenderRepos;

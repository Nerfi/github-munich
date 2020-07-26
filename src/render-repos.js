import React, {useState, useEffect} from 'react';

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

  if (repo.items) {
    return(
      <>
        {repo.items.map(repo => <p>{repo.full_name}</p>  )}
      </>
    )

  }

  if (repos) {
    return <>{repos.map(repo => <p>{repo.full_name}</p>)})</>
  }

  return <>Not found</>
};

export default RenderRepos;

import React, {useState, useEffect} from 'react';
import './styles/renderRepos.css';
import RenderData from './RenderData';

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


  const changeDate = date => {
    const desiredDate = new Date(date);
    const dateString = desiredDate.toDateString();
    return dateString;

  };

  //estos son los repos que el usuario ha buscado
  if (repo.items) {
    return(
      <div>
        <RenderData repo={repo}/>
      </div>
    )

  }

  if (repos) {
    // aqui van las repos by default
    return(
    <div>
     <RenderData repos={repos} />
    </div>
    )
  }

  return <>Not found</>
};

export default RenderRepos;

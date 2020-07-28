import React, {useState, useEffect} from 'react';
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



 return (
  <div>

    {repo.items ?  <RenderData repo={repo} /> : <RenderData repos={repos}/> }





  </div>
)
};

export default RenderRepos;

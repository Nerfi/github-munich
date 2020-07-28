import React, {useState, useEffect} from 'react';
import RenderData from './RenderData';


/*  This component will be the one taking care whether the user typed in or not
if not , the component will render the default props given by to it, otherwise it will render
the response it gets back from the API GET request */

const RenderRepos = ({repo}) => {

  const [repos, setRepos] = useState([]);

/*Hook, once the component mount we will render some default data to the screen
  this hook will re-render just when the  `repo` prop changes */
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

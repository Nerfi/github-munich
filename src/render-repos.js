import React,{useState, useEffect} from 'react';
import './styles/renderRepos.css';
/* este component va a aceptar los props que searBar le va a pasar */
const RenderRepos = ({repo}) => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {

    const getRepos = async () => {

      try {

        const getData = await fetch(' https://api.github.com/users/rodrigopk/repos');
        const response = await getData.json();
        setRepos(response);

      }catch(e) {
        console.log(e,'this is the error');
      }
    };

    getRepos();

  },[]);



  return(
    <div>

    {repos.map(repo => {
      return (
        <div className="repos">
        <ul>
          <li>{repo.name}</li>
          <li>{repo.description}</li>
          <li></li>
        </ul>

        </div>
        )
    })}

    </div>

  )
};

export default RenderRepos;

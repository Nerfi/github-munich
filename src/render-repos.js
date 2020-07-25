import React,{useState, useEffect} from 'react';
import './styles/renderRepos.css';

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

  //tengo que iterar en esta array de objetos

  console.log(repo, 'repo prop is here')

  if (repo.length > 0) {

  }


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

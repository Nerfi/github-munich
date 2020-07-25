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
  console.log(typeof(repo) ,  'the typeof props is here weyy')

  console.log(repo, 'repo object is here');

  //new try out

  let reposRendered = (

        repos.map(repo => {
      return (
        <div className="repos">
        <ul>
          <li>{repo.name}</li>
          <li>{repo.description}</li>

        </ul>

        </div>
        )
    })

  )


  if(repo) {
    return (
      //trying to iterate over the array that I got back from my query string
      reposRendered = repo.map(repo => {
        return  <p>{repo.full_name}</p>

      })
    )
  }




  return(
    <div>

    <p>{repo.name}</p>

    {reposRendered}

    </div>

  )
};

export default RenderRepos;

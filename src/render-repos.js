import React,{useState, useEffect} from 'react';
import './styles/renderRepos.css';

const RenderRepos = ({repo}) => {

  const [repos, setRepos] = useState([]);

  //seems to be working but not sure

  const [searchRepo, setSearchRepo] = useState([]);

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

  //login the searched repos
  console.log(searchRepo, 'aqui estan los repos buscados por el user')

  //this line is working and given me and array of objects
  console.log(repo, 'repo items is here');



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



//not working: Error: too many re-rendering
  useEffect(()=> {
    if(repo.items) {

      setSearchRepo(repo.items)
    }

  },[searchRepo])

      // trying to iterate over the array that I got back from my query string, not working
        console.log(searchRepo,'aqui esta search repo state')





  return(
    <div>

    {reposRendered}

    </div>

  )
};

export default RenderRepos;

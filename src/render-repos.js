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

  //tengo que iterar en esta array de objetos
  console.log(typeof(repo) ,  'the typeof props is here weyy')

  //this line is working and given me and array of objects
  console.log(repo, 'repo items is here');

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

  console.log(searchRepo,'aqui esta search repo state')


  //if(repo.items) {

    //setSearchRepo(repo.items)

     // trying to iterate over the array that I got back from my query string, not working
      //reposRendered = repo.items.map(repo => {
        //return  <h1>{repo.full_name}</h1>

      //}//)

  //}




  return(
    <div>

    {reposRendered}

    </div>

  )
};

export default RenderRepos;

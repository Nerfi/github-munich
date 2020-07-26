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

    //login the repo prop
    console.log(typeof(repo), 'login repo from useEffect')


  },[]);



  //after submiting what the user types in
  //the response is an object, with a 'items' key
  //which is an array, depending on the number of repos the user has
  console.log(repo, 'repo object after typing in  on searchBar')

  if (!repo.items) return <div>Not found</div>


  return(
    <div>

  <div>
  { repo.items.map(repo => {
    return(
      <div>
      <ul>
        <li>{repo.full_name}</li>
        <li>{repo.languaje}</li>

      </ul>

      </div>
    )
  })}

  </div>



    </div>

  )
};

export default RenderRepos;

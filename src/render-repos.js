import React, {useState, useEffect} from 'react';
import './styles/renderRepos.css';

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

  console.log(repos,  'repos prop is here')

  const changeDate = date => {
    const desiredDate = new Date(date);
    const dateString = desiredDate.toDateString();
    return dateString;

  };
  //estos son los repos que el usuario ha buscado
  if (repo.items) {
    return(
      <div>
        {repo.items.map(repo => {
          return(

            <div className="searchedRepos">

             <h2 className="d-flex width-full p-4">{repo.name}</h2>
              <p className="d-flex p-4">{repo.description}</p>

              <div className="f6 text-grey mt-2">
                <p className="d-flex p-4">{repo.language} this is the language</p>
                <p className="d-flex p-4">updated{changeDate(repo.pushed_at)}</p>
              </div>

            </div>
          )
        })}
      </div>
    )

  }

  if (repos) {
    // aqui van las repos by default
    return(
    <div>

    {repos.map(repo => {
      return(
      <div className="user-repositories-list">

        <ul>
        <div className="d-inline-block" >

          <li className="d-flex width-full p-4"><h1>{repo.name}</h1></li>
          <li className="d-flex p-4"><h3>{repo.description}</h3></li>

          <div className="f6 text-grey mt-2">

            <li className="d-flex p-4">{repo.language}</li>
            <li className="d-flex p-4">updated {changeDate(repo.pushed_at)}</li>
          </div>

        </div>

        </ul>


      </div>

      )
    })}
    </div>
    )
  }

  return <>Not found</>
};

export default RenderRepos;

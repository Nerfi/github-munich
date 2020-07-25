import React, {useState} from 'react';
import './layout.css';
import RenderRepos from './render-repos';
import './styles/searchBar.css';

const SearchBar = () => {

  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = async (e) => {

    e.preventDefault();

    try {

      //const queryString = await fetch(`https://api.github.com/search/repositories?q=repo:rodrigopk/${query}`) ;

      const anotherFetch = await fetch(`https://api.github.com/search/repositories?q=${query}+user:rodrigopk`)

      const response = anotherFetch.json();
      setQuery(response);

    }catch(e) {

      alert( 'the error is ' + e)
    }

  }

  console.log(query)


  /* For example, if you wanted to search for all repositories owned by defunkt that contained the word GitHub
   and Octocat in the README file, you would use the following query with the search repositories endpoint:

q=GitHub+Octocat+in:readme+user:defunkt*/

//EN ESTE COMPONENT PUEDE QUE TENGA QUE ELIMINAR EL BOTTON DE SEARCH

  return(
    <div className="column1">

      <form onSubmit={handleClick}>

      <div className="search">

        <input  className="input" type="text" placeholder="Find a repository..." value={query} onChange={handleChange}/>

      </div>
        <RenderRepos repo={query}/>

      </form>
  </div>
  )
}

export default SearchBar;

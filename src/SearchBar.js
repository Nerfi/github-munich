import React, {useState} from 'react';
import './layout.css';
import RenderRepos from './render-repos';
import './styles/searchBar.css';

const SearchBar = () => {

  const [query, setQuery] = useState('');

  const [newState, setNewState ] = useState([]);


  const handleChange = (e) => setQuery(e.target.value );

  const handleClick = async (e) => {

    e.preventDefault();

    try {

      const newFetchWithDocs = await fetch(`https://api.github.com/search/repositories?q=${query}+user:rodrigopk+language:${query}+in:${query}`)

      const response = await newFetchWithDocs.json();

      //setNewState(response);
     setQuery(response);


    }catch(e) {

      alert( 'the error is ' + e)
    }


  }

  return(
    <div className="column1">

      <form onSubmit={handleClick}>

      <div className="search">

        <input  className="input" type="text" placeholder="Find a repository..." value={query} onChange={handleChange}/>

      </div>
        <RenderRepos repo={query} />

      </form>
  </div>
  )
}

export default SearchBar;

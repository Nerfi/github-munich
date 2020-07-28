import React, {useState} from 'react';
import './layout.css';
import RenderRepos from './render-repos';
import './styles/searchBar.css';

/* SearchBar component , this component takes the query given by the user, according to what he/she types in
and send and HPPT GET request to Github API  , the result of that request is send as a prop to  <RenderRepos repo={query} />
the API call is made using async and await ES6 features */


const SearchBar = () => {

  const [query, setQuery] = useState('');

  const [newState, setNewState ] = useState([]);

   //this function will be trigger on every keydown events
  const handleChange = (e) => setQuery(e.target.value );

  //this function will submit the request and make and API call

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

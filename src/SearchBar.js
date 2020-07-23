import React, {useState} from 'react';
import './layout.css';
import RenderRepos from './render-repos';

const SearchBar = () => {

  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = () => {
    //no preventdefault here since we're not in using a form
    console.log('working')
  }

  //EN ESTE COMPONENT VOY A RENDERIZAR LOS REPOSITORIOS DE CADA USUARIO


  return(
    <div className="column1">
      <input type="text" placeholder="search for a repo" value={query} onChange={handleChange}/>
      <button onClick={handleClick}>Search Repo</button>
      <RenderRepos/>
    </div>
  )
}

export default SearchBar;

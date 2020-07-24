import React, {useState} from 'react';
import './layout.css';
import RenderRepos from './render-repos';
import './styles/searchBar.css';

const SearchBar = () => {

  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = () => {
    //no preventdefault here since we're not in using a form
    console.log('working')
  }

  //EN ESTE COMPONENT VOY A RENDERIZAR LOS REPOSITORIOS DE CADA USUARIO

//EN ESTE COMPONENT PUEDE QUE TENGA QUE ELIMINAR EL BOTTON DE SEARCH

  return(
    <div>
    <div className="column1 search">

      <input  className="input" type="text" placeholder="Find a repository..." value={query} onChange={handleChange}/>

      <RenderRepos repo={query}/>
    </div>
  </div>
  )
}

export default SearchBar;

import React, {useState} from 'react';

const SearchBar = () => {

  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = () => {
    //no preventdefault here since we're not in using a form
    console.log('working')
  }


  return(
    <div className="SearchBar">
      <input type="text" placeholder="search for a repo" value={query} onChange={handleChange}/>
      <button onClick={handleClick}>Search Repo</button>
    </div>
  )
}

export default SearchBar;

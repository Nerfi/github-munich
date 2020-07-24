import React from 'react';
/* este component va a aceptar los props que searBar le va a pasar */
const RenderRepos = ({repo}) => {
  return(
    <div>
    <p>{repo}</p>
      <ul>
      <li>Repo1</li>
      <li>Repo2</li>
      <li>Repo3</li>
      <li>Repo4</li>
    </ul>
    </div>

  )
};

export default RenderRepos;

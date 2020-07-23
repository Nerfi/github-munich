import React,{useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

const App = () => {

    const [userData , setUserData] = useState({});

    useEffect(() => {

        const getUserData = async () => {

          try {

            const endPoint = await fetch(` https://api.github.com/users/rodrigopk`);
            //const endPoint = await fetch(` https://api.github.com/users/Nerfi`);

            const response =  await endPoint.json();

            setUserData(response);

            //fetching repos, need some state to hold the repos
                const repositories = await fetch(response.repos_url);
                const repoJson = await repositories.json();
                console.log(repoJson);



          } catch(e) {
            console.log(e.message)
          }

        };

        getUserData();


    },[]);



  return (
    <div>
  {/* mandar como props: img ,name, description,and github  name */}

      <UserProfile
      name={userData.name}
       img={userData.avatar_url}
       description={userData.bio}
       github={userData.login}
       />

      <SearchBar/>
    </div>
  )
}

export default App;

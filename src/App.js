import React,{useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

const App = () => {

    const [userData , setUserData] = useState({});

    useEffect(() => {

        const getUserData = async () => {

          try {

            const endPoint = await fetch(` https://api.github.com/users/rodrigopk`);

            const response =  await endPoint.json();

            setUserData(response);


          } catch(e) {
            console.log(e.message)
          }

        };
          ///calling the funcion
        getUserData();


    },[]);

  console.log(userData, 'user data should be here')

  return (
    <div>
      <h1>Github munich test</h1>

      <UserProfile/>

      <SearchBar/>
    </div>
  )
}

export default App;

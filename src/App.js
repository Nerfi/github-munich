import React,{useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import ToolBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
/* Main component of the App, this component will make and API  GET request to https://api.github.com/users/rodrigopk
and once the response status is 202, the data retrieve by the API call will be send as a props to <UserProfile/> component(dummy one)
This componetn is the one that will render   <ToolBar/>  <SearchBar/> */


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

        getUserData();


    },[]);



  return (
    <div>

    <ToolBar/>
      <SearchBar/>
      <UserProfile
      name={userData.name}
       img={userData.avatar_url}
       description={userData.bio}
       github={userData.login}
       />

    </div>
  )
}

export default App;

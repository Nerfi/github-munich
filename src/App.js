import React,{useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import ToolBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

    const [userData , setUserData] = useState({});

    useEffect(() => {

        const getUserData = async () => {

          try {

            const endPoint = await fetch(` https://api.github.com/users/rodrigopk`);
            //const endPoint = await fetch(` https://api.github.com/users/Nerfi`);

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
  {/* mandar como props: img ,name, description,and github  name */}
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

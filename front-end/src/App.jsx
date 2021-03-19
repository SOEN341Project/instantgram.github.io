import React from 'react';
import axios from 'axios';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import FollowerDisplay from './components/FollowerDisplay/FollowerDisplay';
//import OtherUserProfile

function App() {
  const url = 'http://localhost:9000/profile/';
  const [username, setUsername] = React.useState(null);
  const [userID, setUserID] = React.useState(null);
  const [allUsers, setAllUsers] = React.useState([]);

  React.useEffect(() => {
    getUserInfo();
    getAllUsers();
  }, []);
  
  axios.defaults.withCredentials = true;

  const getUserInfo = () => {
    axios
      .get(url, {withCredentials: true})
      .then((response) => {
        if (response.data === undefined) {
          setUsername(null);
          setUserID(null);
        } else {
          setUsername(response.data.username);
          setUserID(response.data._id);
        }
        console.log(response.data.username);
        console.log(response.data._id);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
    });
  };

  const getAllUsers = () => {
    axios.get('http://localhost:9000/allusers')
      .then((response) => {
          setAllUsers(response.data);
          console.log(response);
          console.log(response.data);
      })
      .catch((error) => {
          console.log(`Error: ${error}`);
      });
  }

  const allUsernames = allUsers.map(user => user.username);
  console.log(allUsernames);

  const userObject = {"username": username, "userID": userID};

  return (
    <>
      <Navigation user={userObject} allUsers={allUsernames} />
      <ProfileDetails user={userObject} allUsers={allUsernames} />
      {username ? <PhotoGallery user={userObject} /> : null}
      {username ? <FollowerDisplay user={userObject} /> : null}
    </>
  );
}

export default App;

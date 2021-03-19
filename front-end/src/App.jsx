import React from 'react';
import axios from 'axios';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
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
    axios.get('http://localhost:9000/profile/all/all/')
      .then((response) => {
          setAllUsers(response.data);
          console.log(response.data);
      })
      .catch((error) => {
          console.log(`Error: ${error}`);
      });
  }

  const userObject = {"username": username, "userID": userID};

  return (
    <>
      <Navigation user={userObject} allUsers={allUsers} />
      <ProfileDetails user={userObject} />
      {username ? <PhotoGallery user={userObject} /> : null}
    </>
  );
}

export default App;

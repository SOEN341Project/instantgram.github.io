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
  const [profilePic, setProfilePic] = React.useState([]);

  React.useEffect(() => {
    getUserInfo();
    getAllUsers();
    getProfilePicInfo();
  }, [username]);
  
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

  const convertImage = (picture) => {
    const image = new Image();
    image.src = `data:image/jpg;base64,${picture}`;
    return image.src;
  };

  const getProfilePicInfo = () => { //--------------------------------------
    axios.get('http://localhost:9000/postpic/getProfilePic/' + username)
      .then((response) => {
        setProfilePic(convertImage(response.data[0].img));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }; //---------------------------------------------------------------

  //const pic = convertImage(profilePic[0].img);

  return (
    <>
      <Navigation user={userObject} allUsers={allUsernames} />
      <ProfileDetails user={userObject} allUsers={allUsernames} profilePic={profilePic} />
      {username ? <PhotoGallery user={userObject} /> : null}
      {username ? <FollowerDisplay user={userObject} /> : null}
    </>
  );
}

export default App;

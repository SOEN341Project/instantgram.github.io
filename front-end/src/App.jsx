import './App.css';
import React from 'react';
import axios from 'axios';
import Navigation from './components/Navigation/Navigation';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import PostPicture from './components/Users/PostPicture'

function App() {
  const url = 'http://localhost:9000/profile/';
  const [username, setUsername] = React.useState(null);
  const [userID, setUserID] = React.useState(null);

  React.useEffect(() => {
    getUserInfo();
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

  return (
    <>
      <Navigation loggedIn={username ? true : false} />
      <PostPicture />
      <ProfileDetails username = {username || "Login to use Instantgram."}/>
      {username ? <PhotoGallery  /> : null}
    </>
  );
}

export default App;

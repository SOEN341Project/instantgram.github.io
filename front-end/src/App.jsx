import './App.css';
import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './components/Navigation/Navigation';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import Users from './components/Users/Users';
import Pictures from './components/Users/Pictures';
import PostPicture from './components/Users/PostPicture';
import Post2 from './components/Post/Post2';

function App() {
  const img = "https://media.npr.org/assets/img/2015/02/03/globe_west_2048_sq-3c11e252772de81daba7366935eb7bd4512036b8.jpg";
  const arr = [img, img, img, img, img];
  const profileimage="https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=";
  const username= "username";

  const url = 'http://localhost:9000/profile/';
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    getUserInfo();
  }, []);
  
  axios.defaults.withCredentials = true;
  const getUserInfo = () => {
    axios.get(url, {withCredentials: true}) 
    .then((response) => {
      setUser(response.data.username);
      console.log(response.data.username);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
  };

  return (
    <>
      <Navigation />
      <PostPicture />
      <ProfileDetails profileimage = {profileimage} username = {user || username}/>
      <PhotoGallery images={arr} />
    </>
  );
}

export default App;

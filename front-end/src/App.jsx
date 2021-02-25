import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from './components/Navigation/Navigation';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';
import Users from './components/Users/Users';

function App() {
  const img = "https://media.npr.org/assets/img/2015/02/03/globe_west_2048_sq-3c11e252772de81daba7366935eb7bd4512036b8.jpg";
  const arr = [img, img, img, img, img];
  return (
    <>
      <Navigation />
      <Users />
      <PhotoGallery images={arr} />
    </>
  );
}

export default App;

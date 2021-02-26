import React from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import './PhotoGallery.css';

const PhotoGallery = (props) => {
    
    const url = 'http://localhost:9000/postpic/';
    const [user, setUser] = React.useState('768'); //props.username
    const [pics, setPics] = React.useState([]);

    //console.log("Hello");
    

    React.useEffect(() => {
        getPicsInfo();
    }, []);
    
    const getPicsInfo = () => {
        axios.get("http://localhost:9000/postpic/333")
        .then((response) => {
            console.log("Hello");
            setPics(response.data);
            console.log("Hello");
            console.log(response);
            console.log(response.data);
            console.log(response.data.pictures);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
    };

    const pictures = pics.map(pic => pic.img);
    const newPictures = pictures.map((picture, i) => <Image rounded src={picture} key={`image_${i}`} id="image" />);
    
    const { images } = props;
    const newImages = images.map((image, i) => <Image rounded src={image} key={`image_${i}`} id="image" />);

    return (
        <div id="gallery">
            <hr id="line-break" />
            {newPictures}
            {newImages}
        </div>
    );
}

export default PhotoGallery;

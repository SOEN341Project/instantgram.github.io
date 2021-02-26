import React from 'react';
import axios from 'axios';
import './PhotoGallery.css';

const PhotoGallery = (props) => {
    
    const url = 'http://localhost:9000/postpic/';
    const [user, setUser] = React.useState('768'); //props.username
    const [pics, setPics] = React.useState([]);

    React.useEffect(() => {
        getPicsInfo();
    }, []);
    
    const getPicsInfo = () => {
        axios.get(url + user)
        .then((response) => {
            setPics(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
    };

    const convertImage = (picture) => {
        const image = new Image();
        image.src = `data:image/jpg;base64,${picture}`;
        return image.src;
    };

    const pictures = pics.map(pic => convertImage(pic.img));
    
    const newPictures = pictures.map((picture, i) => <img rounded src={picture} key={`image_${i}`} id="image" />);
    
    return (
        <div id="gallery">
            <hr id="line-break" />
            {newPictures}
        </div>
    );
}

export default PhotoGallery;

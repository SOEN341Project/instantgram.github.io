import React from 'react';
import axios from 'axios';
import './PhotoGallery.css';

import Photo from '../Photo/Photo'

const PhotoGallery = (props) => {
    
    const url = 'http://localhost:9000/postpic/';
    const [pics, setPics] = React.useState([]);
    const [photoID, setPhotoID] = React.useState('');
    const [username, setUsername] = React.useState(props.user.username); //props.username
    const [userID, setUserID] = React.useState(props.user.userID); //props.username

    const [photoVisibility, setPhotoVisibility] = React.useState(false);

    React.useEffect(() => {
        getPicsInfo();
    }, []);
    
    const getPicsInfo = () => {
        axios.get(url + username)
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
    
    const newPictures = pictures.map((picture, i) => {
        return(
            <>
                <img rounded src={picture} key={`image_${i}`} onClick={() => {setPhotoVisibility(true); setPhotoID(`_id${i}`);console.log(photoID)}} id="image"/>
                <Photo
                    user={props.user}
                    source={picture}
                    show={photoVisibility}
                    onHide={() => setPhotoVisibility(false)}
                />
            </>
        );
    });
    
    return (
        <div id="gallery">
            <hr id="line-break" />
            {newPictures}
        </div>
    );
}

export default PhotoGallery;

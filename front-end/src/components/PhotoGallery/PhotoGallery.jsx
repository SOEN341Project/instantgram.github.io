import React from 'react';
import axios from 'axios';
import './PhotoGallery.css';

import Photo from '../Photo/Photo'

const PhotoGallery = (props) => {
    
    const url = 'http://localhost:9000/postpic/';
    const [pics, setPics] = React.useState([]);
    const [photoID, setPhotoID] = React.useState('');
    //const [comments, setComments] = React.useState([]);
    //const [username, setUsername] = React.useState(props.user.username); //props.username
    //const [userID, setUserID] = React.useState(props.user.userID); //props.username

    const [photoVisibility, setPhotoVisibility] = React.useState(false);

    React.useEffect(() => {
        getPicsInfo();
    }, []);
    
    const getPicsInfo = () => {
        axios.get(url + props.user.username)
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

    const tempPictures = pics.map(pic => {
        if (!pic.profilePic) {
            return convertImage(pic.img)
        } else {
            return null;
        }
    });
    const pictures = tempPictures.filter(n => n)

    const [selectedPhoto, setSelectedPhoto] = React.useState('');
    const [newestPhoto, setNewestPhoto] = React.useState(null);
    const [caption, setCaption] = React.useState('');

    
    const newPictures = pictures.map((picture, i) => {
        return(
            <>
                <img rounded 
                src={picture} 
                key={`image_${i}`} 
                onClick={() => {
                    setPhotoVisibility(true);
                    setPhotoID(pics[i]._id);
                    setSelectedPhoto(picture);
                    setNewestPhoto(pics[i]);
                    setCaption(pics[i].description); //CHANGE
                    console.log(photoID)
                    //setComments([pics[i].comments[].comment.from][pics[i].comments.comment.text]);
                    //console.log(comments);
                         }
                    } id="image"/>
            </>
        );
    });

    return (
        <div id="gallery">
            <hr id="line-break" />
            {newPictures}
            <Photo
                user={props.user}
                show={photoVisibility}
                onHide={() => setPhotoVisibility(false)}
                source={selectedPhoto}
                caption={caption}
                photoID = {photoID}
                newestPhoto = {newestPhoto}
            />
            <hr id="line-break" />
        </div>
    );
}

export default PhotoGallery;

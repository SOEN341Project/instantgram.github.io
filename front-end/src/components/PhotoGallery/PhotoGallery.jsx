import React from 'react';
import axios from 'axios';
import './PhotoGallery.css';

import Photo from '../Photo/Photo'

const PhotoGallery = (props) => {
    
    const url = 'http://localhost:9000/postpic/';
    const [user, setUser] = React.useState('768'); //props.username
    const [pics, setPics] = React.useState([]);
    const [photoID, setPhotoID] = React.useState('');
    const [comments, setComments] = React.useState([[]]);

    const [photoVisibility, setPhotoVisibility] = React.useState(false);

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
    
    const newPictures = pictures.map((picture, i) => {
        return(
            <>
                <img rounded 
                src={picture} 
                key={`image_${i}`} 
                onClick={() => {
                    setPhotoVisibility(true); 
                    setPhotoID(pics[i]._id);
                    console.log(photoID)
                    //setComments([pics[i].comments[].comment.from][pics[i].comments.comment.text]);
                    console.log(comments);
                         }
                    } id="image"/>
                <Photo
                    user={props.user}
                    source={picture}
                    show={photoVisibility}
                    onHide={() => setPhotoVisibility(false)}
                    photoID = {pics[i]._id}
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

import React from 'react';
import Image from 'react-bootstrap/Image';
import './PhotoGallery.css';

const PhotoGallery = (props) => {
    const { images } = props;
    const newImages = images.map((image, i) => <Image rounded src={image} key={`image_${i}`} id="image" />);
    
    return (
        <div id="gallery">
            <hr id="line-break" />
            {newImages}
        </div>
    );
}

export default PhotoGallery;

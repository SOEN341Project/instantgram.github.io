import React from 'react';
import axios from 'axios';

const PostPicture = (props) => {
    const url = 'http://localhost:3000/postpic/333'; //'http://localhost:3000/users'

    React.useEffect(() => {
        postPic();
    }, []);
    
    const postPic = () => {
        axios.post(url, {
            picture: "randomimage",
        })
        .then ((response) => {
            console.log(response.data);
        }, (error) => {
            console.log(`Error: ${error}`);
        })
    }

    return (
        <div></div>
    );
}

export default PostPicture;

/*
axios.post('http://localhost:3000/login', {
    username: "",
    password: ""
})
.then ((response) => {
    console.log(response.data);
}, (error) => {
    console.log(error);
})
*/

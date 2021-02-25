import React from 'react';
import axios from 'axios';

const Pictures = (props) => {
    const url = 'http://localhost:3000/postpic'; // 'https://jsonplaceholder.typicode.com/users'
    const [pics, setPics] = React.useState([]);

    React.useEffect(() => {
        getPics();
    }, []);
    
    const getPics = () => {
        axios.get(url)
        .then ((response) => {
            setPics(response.data);
        }, (error) => {
            console.log(`Error: ${error}`);
        })
    }

    const pictures = pics.map(pic => pic.img);

    return (
        <div>{pictures}</div>
    );
}

export default Pictures;

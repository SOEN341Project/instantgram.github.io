import React from 'react';
import axios from 'axios';

const Users = (props) => {
    const url = 'https://jsonplaceholder.typicode.com/users'; //'http://localhost:3000/users'
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        getUserInfo();
    }, []);
    
    const getUserInfo = () => {
        axios.get(url)
        .then ((response) => {
            setUsers(response.data);
        }, (error) => {
            console.log(`Error: ${error}`);
        })
    }

    const usernames = users.map(user => user.username);

    return (
        <div>{usernames}</div>
    );
}

export default Users;

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

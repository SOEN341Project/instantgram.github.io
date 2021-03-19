import React from 'react';
import axios from "axios";
import './ProfileDetails.css';

const ProfileDetails = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [currentUser, setCurrentUser] = React.useState('');

    const handleSearch = () => {
        if (props.allUsers.includes(searchQuery)) {
            axios.post("http://localhost:9000/follow/" + searchQuery)
            .then((response) => {
                console.log(response);
                //alert(`You have begun following: ${searchQuery}`);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });

          setCurrentUser(searchQuery);
          setSearchQuery('');
        } else {
          setCurrentUser(null);
          setSearchQuery('');
        }
      }
      console.log("Searched user is: " + currentUser);

    return (
        <div id = "container">
            <div id = "profile-header">
                <h2 id="profile-username">{props.user.username || "Login to use Instantgram."}</h2>
                <form>
                    <input type="text" placeholder="Follow a user..." id="search-bar" onChange={(e) => setSearchQuery(e.target.value)} />
                    <button id="search-but" onClick={handleSearch}>Follow</button>
                </form>
            </div>
        </div>
    )
}

export default ProfileDetails;

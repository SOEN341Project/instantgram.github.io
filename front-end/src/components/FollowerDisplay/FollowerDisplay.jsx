import React from 'react';
import axios from "axios";
import './FollowerDisplay.css';

const ProfileDetails = (props) => {

    const [following, setFollowing] = React.useState([]);

    React.useEffect(() => {
        handleSearch();
      }, []);

    const handleSearch = () => {
        axios.get('http://localhost:9000/following/' + props.user.username)
            .then((response) => {
                setFollowing(response.data[0].following);
                console.log(response);
                console.log(response.data);
                console.log(response.data[0].following);
                console.log(response.data[0].following);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });
      }

      const followingList = following.map(follow => <li>{follow.user}</li>);

    return (
        <div id="container-1">
            <h3>Following</h3>
            <ul>
                {followingList}
            </ul>
        </div>
    )
}

export default ProfileDetails;

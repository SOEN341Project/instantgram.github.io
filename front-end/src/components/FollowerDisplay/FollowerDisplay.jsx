import React from 'react';
import axios from "axios";
import './FollowerDisplay.css';

const ProfileDetails = (props) => {

    const [following, setFollowing] = React.useState([]);
    const [followers, setFollowers] = React.useState([]);

    React.useEffect(() => {
        handleSearch();
      }, []);

    const handleSearch = () => {
        axios.get('http://localhost:9000/following/' + props.user.username)
            .then((response) => {
                setFollowing(response.data[0].following);
                setFollowers(response.data[0].followers);
                console.log(response);
                console.log(response.data);
                console.log(response.data[0].following);
                console.log(response.data[0].followers);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });
      }

      const followingList = following.map(follow => <li>{follow.user}</li>);
      const followersList = followers.map(follower => <li>{follower.user}</li>);

    return (
        <div id="container-1">
            <div id="following">
                <h3>Following</h3>
                <ul>
                    {followingList}
                </ul>
            </div>
            <div id="followers">
                <h3>Followers</h3>
                <ul>
                    {followersList}
                </ul>
            </div>
        </div>
    )
}

export default ProfileDetails;

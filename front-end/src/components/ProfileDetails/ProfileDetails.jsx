import React from 'react';
import './ProfileDetails.css'

const ProfileDetails = (props) => {
    return (
        <div id = "container">
            <div id = "profile-header">
                <h2 id="profile-username">{props.user.username || "Login to use Instantgram."}</h2>
            </div>
        </div>
    )
}

export default ProfileDetails

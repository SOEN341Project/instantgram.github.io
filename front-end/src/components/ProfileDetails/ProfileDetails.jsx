import React from 'react';
import './ProfileDetails.css'

const ProfileDetails = (props) => {
    return (
        <div id = "container">
          
            <div id = "profile-header">

                {/*<div id ="image-cropper">
                    <img src={props.profileimage}></img>
                </div>*/}
                <h2 id="profile-username">{props.user.username || "Login to use Instantgram."}</h2>
               
                {/* <p id ="real-name">Brian Diesel</p>  */}
                {/*Fetch real name? or ommit*/}       
            </div>
        </div>
    )
}

export default ProfileDetails

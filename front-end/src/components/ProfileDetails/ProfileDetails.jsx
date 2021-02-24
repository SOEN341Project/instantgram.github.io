import React from 'react';
import Image from 'react-bootstrap/Image'
import './ProfileDetails.css'

const ProfileDetails = () => {
    return (
        <div id = "container">
          
            <div id = "profile-header">
                <div id ="image-cropper">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I="/>
                    {/*Will have to fetch user profile picture */}
                </div>
                <h2 id="profile-username">brian_diesel</h2> {/*will have to fetch username */}
                {/* <div id
                <p id ="real-name">Brian Diesel</p> {/*Fetch real name? or ommit*/}       
            </div>
        </div>
    )
}

export default ProfileDetails

import React, { useState, useRef } from "react";
import axios from 'axios';

const Post = () => {
  const [selectedImage, setSelectedImage] = useState(null);
	const fileInput = useRef(null)

  const submitForm = () => {
		const formData = new FormData();
		formData.append("file", selectedImage);
	
		axios.post("http://localhost:9000/postpic/768", formData)
		.then((response) => {
			alert("Image uploaded successfully.");
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
			alert("An error occured while trying to upload the image.");
		});
	};

  return (
    <div>
      <form>
				<input type="file" accept=".jpg, .jpeg, .png" />
				<button onClick={e => fileInput.current && fileInput.current.click()}>Submit</button>
        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
};

export default Post;

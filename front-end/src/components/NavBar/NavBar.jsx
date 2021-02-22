import React, { useState, useEffect } from "react";
import './NavBar.css';

const NavBar = (props) => {
  return (
  	<div className='head'>
			<nav>
				<ul>
					{props.children}
				</ul>
			</nav>
		</div>
  );
};

export default NavBar;

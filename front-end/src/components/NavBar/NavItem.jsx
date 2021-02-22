import React, { useState, useEffect } from "react";

const NavItem = (props) => {
  if (props.type === 'search') {
    return (
      <li className={props.type}>
        {props.children}
      </li>
    );
  } else {
    return (
      <li className={props.type}>
        <a href={props.href}>{props.children}</a>
      </li>
    );
  }
  
};

export default NavItem;

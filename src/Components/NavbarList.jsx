import React from 'react';

const NavList = ({ link, text }) => {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href={link}>{text}</a>
    </li>
  );
};

export  { NavList };

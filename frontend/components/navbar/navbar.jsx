import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {

  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.email}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : ''


  return (
    <header className="nav-bar">
      <h1>NavBar</h1>
      {/* styled with display flex */}
      {/* <div>Logo/search
        <a></a>
        <div>
          icon
          search bar
        </div>
      </div>
      <div>Main
        <ul>Display flex, icon items
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>Profile buttons, display flex
        <a>Profile</a>
        <a>Create</a>
        <a>Messenger</a>
        <a>Notifications</a>
        <a>Dropdown</a>
      </div> */}
    </header>
  )
}

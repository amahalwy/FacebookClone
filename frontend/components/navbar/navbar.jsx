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
      {/* <h1>NavBar</h1> */}

      {/* <h1>{display}</h1> */}


      {/* styled with display flex */}
      <div className='navbar-search'>
        <a>Logo</a>
        <div>
          search bar
        </div>
      </div>
      <div className='navbar-main'>
        <ul className='navbar-main-ul'>
          <li>Home</li>
          <li>Watch</li>
          <li>Marketplace</li>
          <li>Groups</li>
          <li>Gaming</li>
        </ul>
      </div>
      <div className='navbar-menu'>
        <h3>Welcome {currentUser.email}!</h3>
        <button>Profile</button>
        <button>Create</button>
        <button>Messenger</button>
        <button>Notifications</button>
        <button>Dropdown</button>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  )
}

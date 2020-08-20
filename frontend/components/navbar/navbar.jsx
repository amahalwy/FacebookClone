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
    
      <div className='navbar-search'>
        <div className='navbar-search-icon+input'>

          <div className='navbar-search-icon'>
            <Link to='/users'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4" /><stop offset="1" stop-color="#007ad9" /></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" /><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z" /></svg></Link>
          </div>
          <div className='navbar-search-input'>
            <input 
            type="text"
            value='Search Facebook'
            className='navbar-search-input'
            />
          </div>
          
        </div>
          
        {/* </div> */}
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

        <div className='navbar-menu-user-profile-container'>
          <div className='navbar-menu-user-profile' >
            <i>User Icon </i>
            <Link to={`/users/${currentUser.id}`}>{currentUser.firstName}</Link>
          </div>
        </div>

        <div className='navbar-menu-list-button'>
          <div className='navbar-menu-create-post' >
            {/* On click, open create post modal */}
            <i>+</i>
          </div>
        </div>

        <div className='navbar-menu-list-button'>
          <div className='navbar-menu-users' >
            <Link to={`/users/${currentUser.id}`}>Users</Link>
          </div>
        </div>
{/* 
        <div className='navbar-menu-list-button'>
          <div className='navbar-menu-user-profile' >
            <i>User Icon</i>
            <Link to={`/users/${currentUser.id}`}>{currentUser.firstName}</Link>
          </div>
        </div> */}

    
        {/* <div className='navbar-menu-list-button'>
          <div className='navbar-menu-users' >
            <Link to={`/users/${currentUser.id}`}>Users</Link>
          </div>
        </div> */}

        <div class="dropdown">
          <span>X</span>
          <div class="dropdown-content">

            <div>

              <div>Profile Div
                <div>Profile pic</div>

                <div>Profile stuff itself
                  <div>User's Full name</div>
                  <div>See your profile</div>
                </div>
              </div>
              

              <div>Feedback
                <div>Help icon thing</div>

                <div>
                  <div>Give Feedback</div>
                  <div>Help us improve the cloned Facebook.</div>
                </div>

              </div>

              <div>Bottom list
                <div>List

                  <div>
                    <div className='navbar-dropdown-list-div'>
                      <div>Icon</div>
                      <div>Settings and Privacy</div>
                    </div>
                  </div>

                  <div>
                    <div className='navbar-dropdown-list-div'>
                      <div>Icon</div>
                      <div>Help & Support</div>
                    </div>
                  </div>

                  <div>
                    <div className='navbar-dropdown-list-div'>
                      <div>Icon</div>
                      <div>Dark Mode</div>
                      <div>TOGGLE THINGG</div>
                    </div>
                  </div>

                  <div>
                    <div className='navbar-dropdown-list-div'>
                      <div>Icon</div>
                      <div>
                        <div>Switch to classic Facebook</div>
                        <div>The classic Facebook will no longer be available starting in September</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='navbar-dropdown-list-div'>
                      <div>Icon</div>
                      <div>Logout</div>
                    </div>
                  </div>

                </div>

                <div>Privacy, cookies, etc</div>

              </div>

            </div>
          </div>
        </div>

        <button onClick={logout} className='logout-button'>Logout</button>
      </div>
    </header>
  )
}

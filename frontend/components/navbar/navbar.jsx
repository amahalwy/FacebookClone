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
    <nav className="nav-bar">
    
      <div className='navbar-search'>
        <div className='navbar-search-icon+input'>

          <div className='navbar-search-icon'>
            <span>

            <Link to='/users'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4" /><stop offset="1" stop-color="#007ad9" /></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" /><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z" /></svg></Link>
            </span>
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

          <a href="">
            <li className='navbar-main-li'>
              <div className='navbar-main-home'>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="nav-house" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
              </div>
            </li>
          </a>

          <a href="">
            <li className='navbar-main-li'>
              <div className='navbar-main-watch navbar-main-home-hover'>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="nav-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
              </div>  
            </li>
          </a>

          <a href="">
            <li className='navbar-main-li'>
              <div className='navbar-main-marketplace navbar-main-home-hover'>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="nav-github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </div>
            </li>
          </a>

          <li className='navbar-main-li'>
            <div className='navbar-main-groups navbar-main-home-hover'>
              Groups
            </div>
          </li>

          <li className='navbar-main-li'>
            <div className='navbar-main-gaming navbar-main-home-hover'>
              gaming
            </div>
          </li>

        </ul>
      </div>

      <div className='navbar-menu'>

        <div className='navbar-menu-user-profile-container'>
          <div className='navbar-menu-user-profile' >
            <i>User Icon </i>
            <Link to={`/users/${currentUser.id}`}>{currentUser.firstName} {currentUser.lastName}</Link>
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
            <Link to={`/users`}>Users</Link>
          </div>
        </div>
        
            {/* DROP DOWN HTML */}

        <div className='navbar-menu-list-button'>
          <div class="dropdown navbar-menu-dropdown-click">
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
                        <div>
                          <button onClick={logout}>Logout</button>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div>Privacy, cookies, etc</div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <button onClick={logout} className='logout-button'>Logout</button> */}

      </div>
    </nav>
  )
}

import React from 'react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    // document.getElementsByClassName("dropdown-content").classList.toggle("show");
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(e) {
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className='navbar-menu-list-button'>
        <div className="dropdown navbar-menu-dropdown-click">
          <div className='dropdown-icon' onClick={this.showMenu}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-down" className="more-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></div>

        {
          this.state.showMenu
            ? (

              <div className="dropdown-content" 
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}>

                <div>

                  <div className='profile-parent-div'>
                    <div className='dropdown-profile-pic'>IMAGE</div>

                    <div className='dropdown-profile-stuff'>
                      <div className='dropdown-username'>
                        {this.props.currentUser.firstName} {this.props.currentUser.lastName}
                      </div>
                      <div className='dropdown-see-profile'>See your profile</div>
                    </div>

                  </div>
                </div>

                <div className='dropdown-dividor'></div>

                <div className='dropdown-feedback-card'>

                  <div className='icons-div'>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-alt" className="feedback-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" className='exclamation-icon' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>
                  </div>

                  <div className='feedback-div'>
                    <div>Give Feedback</div>
                    <div>Help us improve the cloned Facebook.</div>
                  </div>

                </div>

                <div className='dropdown-dividor'></div>

                <div className='dropdown-bottom'>
                  <div>
                    <div>
                      <div className='navbar-dropdown-list-div'>
                        <div className='dropdown-bottom-icon'>Icon</div>
                        <div className='dropdown-bottom-text'>Settings and Privacy</div>
                      </div>
                    </div>

                    <div>
                      <div className='navbar-dropdown-list-div'>
                        <div className='dropdown-bottom-icon'>Icon</div>
                        <div className='dropdown-bottom-text'>Help & Support</div>
                      </div>
                    </div>

                    <div>
                      <div className='navbar-dropdown-list-div'>
                        <div className='dropdown-bottom-icon'>Icon</div>
                        <div className='dropdown-bottom-text'>Toggle Color Mode</div>
                      </div>
                    </div>

                    <div>
                      <div className='navbar-dropdown-list-div'>
                        <div className='dropdown-bottom-icon'>Icon</div>
                        <div className='dropdown-bottom-text'>
                          <div>Switch to classic Facebook</div>
                          <div className='dropdown-switch-classic'>The classic Facebook will no longer be available starting in September</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className='navbar-dropdown-list-div' onClick={this.props.logout}>
                        <div className='dropdown-bottom-icon'>Icon</div>
                        <div className='dropdown-bottom-text'>Logout</div>
                      </div>
                    </div>

                  </div>

                  <div>Privacy, cookies, etc
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            )
            : (
              null
            )
        }
        </div>
      </div>
    );
  }
}

// className = 'dropdown-icon'

{/* <div className='navbar-menu-list-button'>
            <div className="dropdown navbar-menu-dropdown-click">
              <span className='dropdown-icon'><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-down" className="more-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></span>
              <div className="dropdown-content">

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
                            <button onClick={this.props.logout}>Logout</button>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div>Privacy, cookies, etc</div>

                  </div>

                </div>
              </div>
            </div>
          </div> */}
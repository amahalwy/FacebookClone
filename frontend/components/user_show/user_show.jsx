import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

class UserShow extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
  }

  render() {

    if (!this.props.user) {
      return '';
    } else {
      return (
        
        <div>
          <NavBarContainer />
            <h1>user's show</h1>
          <strong><p>{this.props.user.firstName}</p></strong>
          <button onClick={this.props.logout}>Logout</button>
          
          <div>Everything
            {/* Insert navbar component here */}
            <nav>NavBar</nav>

            <main className='users-show-main'>Main section
            




              
              {/* Beginning of cover photo section */}
              <div className='users-show-cover-photo-and-bio'>

                <div>
                  <div className='cover-photo-container'>Actual cover photo

                    <div className='profile-photo-container'>Profile photo
                        <div className='profile-photo'>Image of the profile picture</div>
                      <a>Upload photo button</a>
                    </div>
                    <div className='cover-photo'>Image of the cover photo tag</div>
              

                  </div>
                </div>

                {/* <div>Edit cover photos
                  <div>Hold the stuff
                    <div>Div for the actual content
                      <div>Photo Icon</div>
                      <div>Edit cover photo button
                        <button></button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>Add Bio and name section
                  <div>Name of user
                    <h1></h1>
                  </div>
                  <div>
                    <a>Add bio</a>
                  </div>
                </div> */}

              </div>




              {/* End of cover photo section */}

              <div>Bottom part of the site

                <div>
                  <div>Dividor line</div>
                  <div>Rest of stuff
                    <div>Ul list maybe? of buttons to click</div>
                    <div>Buttons to click on</div>          
                    
                    {/* Edit profile, eye thing, search, etc  */}
                    
                  </div>
                </div>

                <div>
                  <div>Left bar</div>



                  <div>Right bar
                    <div>What's on your mind div
                      <div>Div for the what's on your mind input</div>
                      <div>Dividor div</div>
                      <div>Buttons to do stuff</div>
                    </div>
                  </div>

                  <div>Posts section
                    <div>
                      <div>Posts</div>
                      <div>Filters button and manage posts button</div>

                    </div>

                    <div>Dividor div</div>

                    <div>
                      <div>List View</div>
                      <div>Grid View</div>
                    </div>
                    
                  </div>

                </div>
                
              </div>
            </main>

          </div>
        </div>
      )
    }
  }
}

export default UserShow;
import React from 'react'

class UserShow extends React.Component {

  componentDidMount(){
    // Fetch user by ID after mounted
    this.props.fetchUser(this.props.match.params.userId)
  }

  render() {
    return (
      
      <div>
          <h1>user's show</h1>
        <strong><p>{this.props.currentUser.firstName}</p></strong>
        <button onClick={this.props.logout}>Logout</button>
        
        {/* <div>Everything
          <div>NavBar</div>
          <div>Main section */}


            {/* Beginning of cover photo section */}
            {/* <div>Cover Photo section plus bio
              <div>Actual cover photo
                <div><img>Image of the cover photo tag</img></div>
              </div>
              <div>Profile pcture
                <div><img>Image of the profile picture</img></div>
              </div>

              <div>Edit cover photos
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
              </div>

            </div> */}
            {/* End of cover photo section */}

            {/* <div>Bottom part of the site

              <div>
                <div>Dividor line</div>
                <div>Rest of stuff
                  <div>Ul list maybe? of buttons to click</div>
                  <div>Buttons to click on</div>   Edit profile, eye thing, search, etc */}
                  
                {/* </div>
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



          </div>
        </div> */}
      </div>
    )
  }
}

export default UserShow;
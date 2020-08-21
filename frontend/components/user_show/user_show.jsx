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

          
          <section className='cover-photo-section'>

            <div className='cover-photo-container'>   {/* Cover photo section */}
              <img className='cover-photo-img' src="" alt="" />


              <div className='profile-pic-container'> {/* Profile picture */}
                <img src="" alt="Default Profile pic" />
                <div className='camera-circle'>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera" className="camera-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>
                  <input type="file" className='button-file'/>
                </div>
              </div>

              <button className='edit-cover-photo'> {/* Edit cover photo button */}
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera" className="camera-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>
                <input type="file" className='button-file' />
                  Edit cover photo
              </button>
            </div>


            <div className='under-cover-info-container' >     {/* Under cover section */}
              <div className='under-cover-info'>

                <div className='user-name'>{this.props.user.firstName} {this.props.user.lastName}</div>
                <div className='user-bio'>
                  "Some user bio"
                  <button className='edit-bio-button'>Edit</button>
                </div>

                {/* This can be a form/modal??? */}
                {/* <form action=""></form> */}
                
              </div>


              <div className='under-cover-main'>

                <nav className='under-cover-left-nav'>

                  <div className='under-cover-timeline'>
                    <span>Timeline</span>
                  </div>
                  <div className='under-cover-others under-cover-hover'>
                    <span>About</span>
                  </div>
                  <div className='under-cover-others under-cover-hover'>
                    <span>Friends</span>
                  </div>
                  <div className='under-cover-others under-cover-hover'>
                    <span>Photos</span>
                  </div>
                  <div className='under-cover-others under-cover-hover'>
                    <span>Archive</span>
                  </div>
                  <div className='under-cover-more under-cover-hover'>
                    <span className='more'>More
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-down" class="more-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg>
                    </span>
                  </div>

                </nav>
                
                <nav className='under-cover-right-nav'>  
                  <div><button>{/* svg */} Edit profile</button></div>
                  <div><button>eye thingy</button></div>
                  <div><button>magnifying glass</button></div>
                  <div><button>...</button></div>
                </nav>

              </div>


            </div>
            
          </section>

          {/* Profle body section */}
          <section>

            





            {/* End of cover photo section */}
            {/* Edit profile, eye thing, search, etc */}

            {/* <div>Bottom part of the site

                <div>
                  <div>Dividor line</div>
                  <div>Rest of stuff
                    <div>Ul list maybe? of buttons to click</div>
                    <div>Buttons to click on</div>       

                   
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
                
              </div> */}

          </section>
          {/* <h1>User's Show Page</h1>
          <p>To log out now, hover over the 'X' top right and click logout button</p> */}
        </div>
      )
    }
  }
}

export default UserShow;



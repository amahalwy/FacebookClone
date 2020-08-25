import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ProfileButton from './profile_button';
import PostIndexItem from '../posts/post_index_item';
import PostIndexContainer from '../posts/posts_index_container';

class UserShow extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchUserPosts(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
      this.props.clearPosts();
      this.props.fetchUserPosts(this.props.match.params.userId);
    }
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
                    <span className='friends-span'>
                      <p>Friends</p> 
                      <p>{this.props.user.friendCount}</p>
                    </span>
                  </div>
                  <div className='under-cover-others under-cover-hover'>
                    <span>Photos</span>
                  </div>
                  <div className='under-cover-others under-cover-hover'>
                    <span>Archive</span>
                  </div>
                  <div className='under-cover-more under-cover-hover'>
                    <span className='more'>More
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-down" className="more-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg>
                    </span>
                  </div>

                </nav>
                
                <nav className='under-cover-right-nav'>  
                  <div className='right-nav-divs'>
                  {/* Need branching logic here; will be done using a friends association? */}   
                  
                  <ProfileButton 
                    user={this.props.user} 
                    currentUser={this.props.currentUser}
                    postFriendRequest={this.props.postFriendRequest}
                  />

                  </div>
                  <div className='right-nav-divs'>
                    <button className='right-nav-buttons'>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                    </button>
                  </div>
                  <div className='right-nav-divs'>
                    <button className='right-nav-buttons'>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-w-16 fa-search dark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                    </button>
                  </div>
                  <div className='right-nav-divs'>
                    <button className='right-nav-buttons'>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" className="svg-inline--fa fa-w-16 fa-ellipsis-h dark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            
          </section>

          {/* Profle body section */}
          <section className='profile-body-section'>

            





            {/* End of cover photo section */}
            {/* Edit profile, eye thing, search, etc */}

            <div className='profile-body'>Bottom part of the site

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

                  <div>
                    <div>
                      <ul>
                        <PostIndexContainer 
                          user={this.props.user}
                        />
                      </ul>
                    </div>

                    <div>Dividor div</div>

                    <div>
                      <div>List View</div>
                      <div>Grid View</div>
                    </div>
                    
                  </div>

                </div>
                
              </div>

          </section>
          {/* <h1>User's Show Page</h1>
          <p>To log out now, hover over the 'X' top right and click logout button</p> */}
        </div>
      )
    }
  }
}

export default UserShow;



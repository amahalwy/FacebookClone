import React from 'react';

class PostDropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu} className='post-dropdown-button'>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" className="post-button-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="post-dropdown-menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >


                <div className='post-dropdown-edit'>
                  <span>Icon</span>
                  <span>Edit Post</span>
                </div>
                
                <div className='dropdown-dividor'></div>

                <div className='post-dropdown-delete'>
                  <span>Icon</span>
                  <span>Delete Post</span>
                </div>


              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default PostDropdown;

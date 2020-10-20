import React from 'react';
import DynamicModal from '../modal/dynamic_modal';
import DeleteModal from '../modal/delete_modal';
import EditPostForm from '../posts_form/edit_post_form';

class PostDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      openModal: false,
      openDeleteModal: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
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

  showModal() {
    this.setState({ openModal: true });
  };

  hideModal() {
    this.setState({ openModal: false });
  };

  showDeleteModal() {
    this.setState({ openDeleteModal: true });
  }

  hideDeleteModal() {
    this.setState({ openDeleteModal: false })
  }

  render() {
    if (this.props.currentUser.id !== this.props.post.authorId) return ''
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


                <div className='post-dropdown-edit' onClick={this.showModal}>
                  <span>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" className="edit-post post-dropdown-icons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
                  </span>
                  <span>Edit Post</span>
                </div>

                <div className='dropdown-dividor'></div>

                <div className='post-dropdown-delete' onClick={this.showDeleteModal}> 
                  <span>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" className="delete-post post-dropdown-icons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                  </span>
                  <span>Delete Post</span>
                </div>

                <DynamicModal show={this.state.openModal} handleClose={this.hideModal} >
                  <EditPostForm
                    hideModal={this.hideModal}
                    post={this.props.post}
                  />
                </DynamicModal>

                <DeleteModal 
                  show={this.state.openDeleteModal} 
                  handleClose={this.hideDeleteModal} 
                  deletePost={this.props.deletePost} 
                  post={this.props.post}
                />

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

import React from 'react'

class PostIndexItem extends React.Component {
  render() {
    return (
      <div>
        <div className='post-top'>
          <div className='post-header'>
            <div className='post-header-left'>
              <div className='post-header-img'>
                <img src="" alt=""/>
              </div>
              <div className='post-header-info'>
                <p className='post-header-name'>Name</p>
                <p className='post-header-date'>Date posted</p>
              </div>
            </div>
            <div className='post-header-right'>
              ... icon
            </div>
          </div>
          <div className='post-body'>

          </div>
        </div>

        <div className='post-buttons'></div>
        <div className='post-comment'>
          <div className='comment-container'>
            <img src="" alt=""/>
            <form action="">
              <input type="text"/>
              <div className='comment-icons'>
                icons
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PostIndexItem;
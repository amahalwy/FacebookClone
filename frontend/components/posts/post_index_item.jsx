import React from 'react'

class PostIndexItem extends React.Component {

  // props will hold the post itself, can access some information about it

  render() {
    const post = this.props.post;
    return (
      <div className='post-card'>

        <div className='post-top'>
          <div className='post-header'>

            <div className='post-header-top'>

              <div className='post-header-img'>
                <img src="" alt=""/>
              </div>

              <div className='post-header-info'>
                <p className='post-header-name'>Name/ {post.body}</p>
                <p className='post-header-date'>Date posted</p>
                <button>... icon</button>
              </div>

            </div>


          </div>

          <div className='post-body'>

          </div>
          <div className='post-photo'>

          </div>
        </div>

        <div className='post-buttons'>

        </div>

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
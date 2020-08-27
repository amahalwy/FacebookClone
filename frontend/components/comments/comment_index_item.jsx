import React from 'react'

class CommentIndexItem extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.comment.body}</p>
      </div>
    )
  }
}

export default CommentIndexItem;
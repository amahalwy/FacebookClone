import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../../actions/post_actions';
import PostForm from './post_form';
import React from 'react'

class EditPostForm extends React.Component {

  componentDidMount(){
    this.props.fetchPost(this.props.match.params.postId)
  }

  render() {
    

    const { action, formType, post } = this.props;

    if (!post) return null;
    return (
      <div>
        <PostForm
          action={action}
          formType={formType}
          post={post}
          buttonText={buttonText}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  history: ownProps.history,
  match: ownProps.match,
  params: ownProps.params,
  currentUser: state.entities.users[state.session.id],
  formType: 'Update Post',
  buttonText: 'Update',
})

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  updatePost: post => dispatch(updatePost(post)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm)
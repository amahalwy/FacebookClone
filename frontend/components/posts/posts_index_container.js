import {connect} from 'react-redux'
// import 

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  posts: Object.values(state.entities.posts)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
import React from 'react'
import FriendshipItem from './friendship_index_item';

class FriendshipIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchFriendships(this.props.currentUser.id);
  }

  componentWillUnmount(){
    this.props.clearFriendships();
  }

  render() {
    return (
      <div>
        <ul className='friends-list'>
        {
          this.props.friendships.map(friendship =>{
            return (
              <FriendshipItem 
                key={friendship.id}
                friendship={friendship}
              />
            )
          })
        }
        </ul>
      </div>
    )
  }
}

export default FriendshipIndex;
import React from 'react'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState
  }

  handleInput(f){
    return e => this.setState({[f]: e.currentTarget.value})
  }

  render() {
    return (
      <div className='post-card'>
        <div className='post-form-header'>
          <div>
            <span>
              <h1>Create Post</h1>
              <div>
                <button>X</button>
              </div>
            </span>
          </div>
        </div>
        <div className='post-form-user'></div>
        <form className='post-form' onSubmit={this.handleSubmit}>
          <div className='picture-text'></div>
          <div className='add-to-your-post'>
            <div>Add to your Post</div>
            <div className='post-icons'>
              <div>
                {/* svg */}
              </div>
              <div>
                {/* svg */}
                {/* PICTURE */}
                <input type="file"/>
              </div>
              <div>
                {/* svg */}
              </div>
              <div>
                {/* svg */}
              </div>
              <div>
                {/* svg */}
              </div>
              <div>
                {/* svg */}
              </div>
            </div>
          </div>
          <div className='post-button'>
            <button></button>
          </div>
        </form>
      </div>
    )
  }
}
export default PostForm
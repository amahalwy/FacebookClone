import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/feed'))
  }

  handleInput(f) {
    return e => this.setState({[f]: e.currentTarget.value});
  }

  
  render() {
    return (
      <div className='session-signup-form'>
        <h2>Sign Up!</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-box'>
            <div className='fullname-field'>
              <input 
                type="text"
                value={this.state.firstName}
                onChange={this.handleInput('firstName')}
                placeholder="First Name"
                />
              <input
                type="text"
                value={this.state.lasttName}
                onChange={this.handleInput('lastName')} 
                placeholder='Last Name'
                />
            </div>

            <div className='email-field'>
                <input 
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                  placeholder='Email'
                />
            </div>
          
            <div className='password-field'>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                placeholder='New Password'
              />
            </div>

            <div className='birthday-info'>
              <div>
                <p>Birthday</p>
                <a href="">Birthday click info button</a>
              </div>

              <div>
                <select name="" id="">Month selection</select>
                <select name="" id="">Day selection</select>
                <select name="" id="">Year selection</select>
              </div>
            </div>

            <div className='gender-info'>

              <label htmlFor="">Female
                <input type="radio"/>
              </label>

              <label htmlFor="">Male
                <input type="radio" />
              </label>

              <label htmlFor="">Custom
                <input type="radio" />
              </label>

            </div>
            <div className='signup-terms'>By clicking yaaaaa</div>
            <div className='signup-button'>
              <button>Sign Up</button>
            </div>
          </div>
        </form>
        
      </div>
    )
  }
}

export default Signup;
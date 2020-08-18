import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(f) {
    return e => this.setState({ [f]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/feed'));
  }

  render() {
    return (
      <div className='session-login-container'>

        <div className='session-login-sidebar'>
          <div>FACEBOOK IMAGE
            <img src="" alt=""/>
          </div>
          <div>Recent Logins</div>
          <div>Click your picture or add an account</div>
          <div>
            <div>Last logged in user here</div>
            <div>Add account here</div>
          </div>

        </div>

        <div className="session-login-form">
          <form>
            <div className='email-field'>
              <label>Email:
              <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                />
              </label>
            </div>

            <div className='password-field'>
              <label>Password:
              <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                />
                <button onClick={this.handleSubmit}>Log In</button>
              </label>
            </div>

            <div className='login-button'>
              <button>Log In</button>
            </div>
            <div className='forgot-account-anchor'>
              <a href="">Forgot account?</a>
            </div>

            <div className='login-create-account-button'>
              {/* Click here and open the SIGNUP component in as a modal */}
              <button>Create New Account</button>
            </div>
          </form>
        </div>


      </div>


    );
  }
}

export default Login;

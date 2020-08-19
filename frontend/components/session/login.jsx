import React from 'react';
import SignupContainer from './signup_container';
import Modal from '../modal/modal';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      openModal: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleInput(f) {
    return e => this.setState({ [f]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.props.history.push('/feed'));
  }

  showModal(e) {
    e.preventDefault();
    this.setState({ openModal: true })
  };

  hideModal() {
    this.setState({ openModal: false });
  };


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
            <div className='session-login-form-field'>
              <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                  placeholder = "Email"
                />
            </div>

            <div className='session-login-form-field'>
              <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                  placeholder = 'Password'
                />
            </div>

            <div className='login-button'>
              <button onClick={this.handleSubmit}>Log In</button>
            </div>
            <div className='forgot-account-anchor'>
              <a href="">Forgot account?</a>
            </div>
            <div className='border-below-anchor'></div>



            <div className='login-create-account-button'>
              <button onClick={this.showModal}>Create New Account</button>
            </div>

          </form>

          <div className='login-create-a-page'>
            <p><strong><a className='create-text' href="">Create a Page</a></strong> for a celebrity, band or business.</p>
          </div>

        </div>

          <div >
              <Modal show={this.state.openModal} handleClose={this.hideModal} >
              <SignupContainer 
                history={this.props.history}
              />
            </Modal>
            
          </div>

      </div>
    )
  }
}

export default Login;

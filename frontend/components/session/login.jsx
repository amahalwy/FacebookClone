import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Signup from './signup';
import Modal from '../modal/modal';
import { login, clearErrors } from '../../actions/session_actions';

export default props => {
  const errors = useSelector(state => state.errors.session)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setModal] = useState(false);
  const demoUser = {
    email: 'demo',
    password: 'demo1234'
  }

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email,
      password
    }
    dispatch(login(user));
  }


  const handleDemo = () => {
    dispatch(login(demoUser));
  }

  const showModal = () => {
    setModal(true);
  }

  const hideModal = () => {
    setModal(false);
  }

  const renderErrors =() => {
    if (errors[0] === "Invalid email/password combination") {
      return (
        <ul>
          {Object.keys(errors).map((error, i) => (
            <li key={`error-${i}`}>{errors[error]}</li>
          ))}
        </ul>
      );
    } else {
      return '';
    }
  }

  const handleClickSignup = () => {
    showModal();
    clearErrors();
  }

  return (
    <div className="session-login-container">
      <div className="session-login-sidebar">
        <div>
          <span className="facebook-text">FAKEBOOK</span>
        </div>
        <div className='session-login-pictures'>
          <div>
            <img src="https://facebook-clone-pro.s3.us-east-2.amazonaws.com/laughing-right.png" alt=""/>
          </div>
          <div>
            <img src="https://facebook-clone-pro.s3.us-east-2.amazonaws.com/laughing-left.jpeg" alt=""/>
          </div>
        </div>
      </div>

      <div>
        <div className="session-login-form">
          <form>
            <div className="session-login-form-field">
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                placeholder="Email"
              />
            </div>

            <div className="session-login-form-field">
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
                placeholder="Password"
              />
            </div>

            <div className="login-button">
              <button onClick={handleSubmit}>Log In</button>
            </div>
            <div className="login-errors">{renderErrors()}</div>
            <div className="demo-account-anchor">
              <a onClick={handleDemo}>Demo Account</a>
            </div>

            <div className="border-below-anchor"></div>

            <div className="login-create-account-button">
              <button onClick={handleClickSignup}>Create New Account</button>
            </div>
          </form>
          <div className="login-create-a-page">
            <p>
              <strong>
                <a className="create-text" href="">
                  Create a Page
                </a>
              </strong>{" "}
              for a celebrity, band or business.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Modal show={openModal} handleClose={hideModal}>
          <Signup
            history={props.history}
            handleClose={hideModal}
          />
        </Modal>
      </div>
    </div>
  );
}
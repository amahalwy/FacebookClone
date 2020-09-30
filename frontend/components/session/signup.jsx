import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { signup, clearErrors } from '../../actions/session';

export default props => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile_photo, setProfilePhoto] = useState("https://facebook-clone-pro.s3.us-east-2.amazonaws.com/default_profile");
  const[cover_photo, setCoverPhoto] = useState('https://facebook-clone-pro.s3.us-east-2.amazonaws.com/default_background');
  
  const errors = useSelector(state => state.errors)
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    let user = {
      first_name,
      last_name,
      email,
      password
    }
    dispatch(signup(user));
    props.history.push(`/users`);

    // Use this for logging into a show page immediately
    // .then(response => this.props.history.push(`/users/${response.currentUser.user.id}`))
  }

  const handleCloseButton = () => {
    props.handleClose();
    clearErrors();
  }

  const renderErrors = () => {
    if (!errors.includes("Invalid email/password combination")) {
      return (
        <ul>
          {Object.keys(errors).map((error, i) => (
            <li key={`error-${i}`}>{errors[error]}</li>
          ))}
        </ul>
      );
    }
  };

  useEffect(() => {
    clearErrors();
  }, [])

  return (
    <div className="session-signup-form">
      <div className="session-signup-form-header">
        <div className="session-signup-form-text">
          <p>Sign Up</p>
          <span>
            <button onClick={handleCloseButton}>
              <p>X</p>
            </button>
          </span>
        </div>
        <div className="session-signup-form-preamble">
          <p>It's quick and easy.</p>
        </div>
      </div>

      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-box">
              <div className="fullname-field">
                <input
                  type="text"
                  value={first_name}
                  onChange={e => setFirstName(e.currentTarget.value)}
                  placeholder="First name"
                />
                <input
                  type="text"
                  value={last_name}
                  onChange={e => setLastName(e.currentTarget.value)}
                  placeholder="Last name"
                />
              </div>

              <div className="email-field">
                <input
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.currentTarget.value)}
                  placeholder="Email"
                />
              </div>

              <div className="password-field">
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.currentTarget.value)}
                  placeholder="New Password"
                />
              </div>

              <div className="signup-button">
                <button>Sign Up</button>
              </div>
              <div className="signup-errors">{renderErrors()}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
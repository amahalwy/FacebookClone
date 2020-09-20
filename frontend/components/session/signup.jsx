import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push(`/users`));

    // Use this for logging into a show page immediately
    // .then(response => this.props.history.push(`/users/${response.currentUser.user.id}`))
  }

  handleInput(f) {
    return (e) => this.setState({ [f]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.props.errors[error]}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className="session-signup-form">
        <div className="session-signup-form-header">
          <div className="session-signup-form-text">
            <p>Sign Up</p>
            <span>
              <button onClick={this.props.handleClose}>
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
            <form onSubmit={this.handleSubmit}>
              <div className="form-box">
                <div className="fullname-field">
                  <input
                    type="text"
                    value={this.state.first_name}
                    onChange={this.handleInput("first_name")}
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    value={this.state.last_name}
                    onChange={this.handleInput("last_name")}
                    placeholder="Last name"
                  />
                </div>

                <div className="email-field">
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleInput("email")}
                    placeholder="Email"
                  />
                </div>

                <div className="password-field">
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput("password")}
                    placeholder="New Password"
                  />
                </div>

                <div className="signup-button">
                  <button>Sign Up</button>
                </div>
                <div className="signup-errors">{this.renderErrors()}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
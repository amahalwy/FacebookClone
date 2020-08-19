import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
    .then(() => this.props.history.push(`/users/`))
    
    // Use this for logging into a show page immediately
    // .then(response => this.props.history.push(`/users/${response.currentUser.user.id}`))
  }

  handleInput(f) {
    return e => this.setState({[f]: e.currentTarget.value});
  }

  
  render() {
    return (
      <div className='session-signup-form'>
        <div className='session-signup-form-header'>
          <div className='session-signup-form-text'><p>Sign Up</p></div>
          <div className='session-signup-form-preamble'><p>It's quick and easy.</p></div>
        </div>
        
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className='form-box'>
                <div className='fullname-field'>
                  <input 
                    type="text"
                    value={this.state.first_name}
                    onChange={this.handleInput('first_name')}
                    placeholder="First name"
                    />
                  <input
                    type="text"
                    value={this.state.last_name}
                    onChange={this.handleInput('last_name')} 
                    placeholder='Last name'
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

                {/* <div className='birthday-info'>
                  <div className='birthday-p'>
                    <p>Birthday</p>
                    <a href="">questionmark icon '?'</a>
                  </div>

                  <div className='birthday-dropdowns'>
                    <select name="" id="">Month selection
                      <option value="0">Month</option>
                      <option value="1">Jan</option>
                      <option value="2">Feb</option>
                      <option value="3">Mar</option>
                      <option value="4">Apr</option>
                      <option value="5">May</option>
                      <option value="6">Jun</option>
                      <option value="7">Jul</option>
                      <option value="8">Aug</option>
                      <option value="9">Sep</option>
                      <option value="10">Oct</option>
                      <option value="11">Nov</option>
                      <option value="12">Dec</option>
                    </select>

                    <select name="" id="">Day selection
                      <option value="0">Day</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>

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

                </div> */}

                {/* <div className='signup-terms'>By clicking yaaaaa</div> */}
                <div className='signup-button'>
                  <button>Sign Up</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
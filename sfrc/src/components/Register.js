import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions';

class Register extends React.Component {
  state = {
      username: '',
      password: ''
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state);
    this.props.history.push('/HomePage');
  };

  handleInput = e => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value 
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Register</h1>
          </div>
          <form onSubmit={this.register}>
            <input
              onChange={this.handleInput}
              name='username'
              type='text'
              label='User Name'
              placeholder='Username'
            />
            <input
              onChange={this.handleInput}
              name='password'
              type='password'
              label='Password'
              placeholder='Password'
            />

            <button type='submit'>Submit</button>
            <Link className='link' to='/login'>
              <p>Already Have An Account?</p>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {register}
)(Register);

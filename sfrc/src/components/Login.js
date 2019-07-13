import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();

    this.props.login(this.state.credentials);
    this.props.history.push('/homepage');
  };

  render() {
    return (
      <div>
        <h1> Login </h1>
        <form onSubmit={this.handleLogin}>
          <input
            onChange={this.handleChange}
            name='username'
            type='text'
            placeholder='Username'
            value={this.state.credentials.username}
          />
          <input
            onChange={this.handleChange}
            name='password'
            type='password'
            placeholder='Password'
            value={this.state.credentials.password}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);

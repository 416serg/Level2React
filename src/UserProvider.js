import React, { Component } from 'react';
import { Provider } from './UserContext';

export default class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Serg',
    email: 'hey@416serg.me',
  };

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: '',
    });
  };

  render() {
    return <Provider value={{ user: this.state, logout: this.logout }}>{this.props.children}</Provider>;
  }
}

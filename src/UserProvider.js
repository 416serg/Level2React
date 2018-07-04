import React, { Component } from 'react';
import { Provider } from './UserContext';

export default class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Serg',
    email: 'hey@416serg.me',
  };
  render() {
    return <Provider value={{ user: this.state }}>{this.props.children}</Provider>;
  }
}

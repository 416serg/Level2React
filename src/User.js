import React, { Component } from 'react';
import { Consumer } from './UserContext';

export default class User extends Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div>
            <h1>User Info</h1>
            <h3>{context.user.name}</h3>
            <h4>{context.user.email}</h4>
          </div>
        )}
      </Consumer>
    );
  }
}

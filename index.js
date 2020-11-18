import 'core-js/es/map';
import 'core-js/es/set';
import 'raf/polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Example from './Example';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Example />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

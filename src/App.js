import React, { Component } from 'react';
import './App.css';
import NavBar from './UI/NavBar'

class App extends Component {
  render() {
    const logo = 'Developer Tiago';
    return (
      <div className="container pl-0 pr-0 col-12">
        <NavBar logo={logo} />
        {this.props.children}
      </div>
    );

  }
}

export default App;

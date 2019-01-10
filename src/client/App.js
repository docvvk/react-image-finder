/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar';
import Search from './components/search';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider className="App">
        <React.Fragment>
          <NavBar />
          <Search />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;

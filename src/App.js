import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

var App = React.createClass({
  render() {
      return (
        <MuiThemeProvider>
        <div className="App">
          <div className="navbar">
            <Link className="link" activeClassName='active' to="/">Home</Link>
            <Link className="link" activeClassName='active' to="/page-1">Projects</Link>
            <Link className="link" activeClassName='active' to="/page-2">Dance</Link>
            <Link className="link" activeClassName='active' to="/page-3">Contact</Link>

          </div>
          <div className="children">
            {this.props.children}
          </div>
        </div>
        </MuiThemeProvider>
      );
    }
});

export default App;

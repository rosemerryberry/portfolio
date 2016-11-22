// home page
import React from 'react';
import 'animate.css'
import './landingpage.css';
import 'materialize-css';


var LandingPage = React.createClass({
  // Render a <Quote> element for each element in the state
  render() {
    return (
      <div className="homepage">
        <div className="name">
          <h1 className ="me animated fadeIn">Rosemary Adams</h1>
          <p className="p1 animated fadeIn">Student</p>
          <p className="div1 animated fadeIn">|</p>
          <p className="p2 animated fadeIn">Dancer</p>
          <p className="div2 animated fadeIn">|</p>
          <p className="p3 animated fadeIn">Feminist</p>
        </div>
      </div>
    );
  }
});

export default LandingPage;
import React from 'react';
import './contact.css'
import 'animate.css'
import '../node_modules/font-awesome/css/font-awesome.css'

// PageOne Component
var Contact = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div className="contact"> 
				<div className="title">
					<h1 className ="connect animated fadeIn">Lets connect!</h1>
				</div>
				<div className="icons animated fadeIn">
					<a href="https://www.facebook.com/rosemary.adams.509"><i className="animated fadeIn fa fa-facebook fa-lg"/></a>
					<a href="https://github.com/rosemerryberry"><i className="animated fadeIn fa fa-github fa-lg"/></a>
					<a href="https://www.linkedin.com/in/rosemary-adams-067499104"><i className="animated fadeIn fa fa-linkedin fa-lg"/></a>
					<a href="https://codepen.io/rosemerryberry/"><i className="animated fadeIn fa fa-codepen fa-lg"/></a>
					<a href="mailto:adamsrc@uw.edu"><i className="animated fadeIn fa fa-envelope fa-lg"/></a>
				</div>
			</div>
		);
	}
});

export default Contact;
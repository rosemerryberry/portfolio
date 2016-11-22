import React, { Component } from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './project.css';
import 'animate.css'

// PageOne Component
var Projects = React.createClass({

	getInitialState:function(){
		return(
			{projects:[]}
		)
	},

			// When component mounts, get the data and set the state of "quotes"
	componentDidMount:function(){
		$.get('data/work.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({projects:parsed.data})
		}.bind(this));
	},

			// Render a <Quote> element for each element in the state
	render() {
		return (
			<MuiThemeProvider>
			<div className="container">
			<div className="projectPage">
				<div>
					{
						this.state.projects.map(function(q){
							return <Thing className="project animated slideInUp"
									     name={q.name} 
										 url={q.url}
										 date={q.date}
										 img={q.img}
										 label={q.label}
										 desc={q.desc}
										 key={q.name}
										 />
						})
					}
				</div>
			</div>
			</div>
			</MuiThemeProvider>
		);
	}
});

var Thing = React.createClass({
	render:function() {
	return (
		<div className="cards">
		<Card className="card">
		   
		    <CardMedia className="media" overlay={<CardTitle title={this.props.name} subtitle={this.props.desc}/>}
		    >
		      <img src={this.props.img}/>
		    </CardMedia>
		    
		    <CardActions className="functions">
		      <FlatButton label="Site" href={this.props.url} />
		    </CardActions>
		 </Card>
		 </div>
		 )
	}
});

export default Projects;
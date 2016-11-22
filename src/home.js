import React from 'react';
import Baby from 'babyparse';
import './home.css'
import $ from 'jquery';
import FlatButton from 'material-ui/FlatButton';

// PageOne Component
var Home = React.createClass({
	getInitialState:function(){
		return(
			{photos:[], events:[]}
		)
	},

	componentDidMount:function(){
		$.get('data/dance.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({events:parsed.data})
		}.bind(this));

		$.get('data/dance_imgs.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({photos:parsed.data})
		}.bind(this));
	},

	render() {
		return (
			<div className="dancePage">
				<h1>Check in here for information on my upcoming shows. Grandma, those pictures are for you.</h1>
				<div className="events">
					{this.state.events.map(function(q){
								return <Events show={q.show} 
											 link={q.link}
											 date={q.date}
											 img={q.img}
											 desc={q.desc}
											 key={q.show}/>
							})
						}
				</div>
				<div className="photos">
					{this.state.photos.map(function(q){
							return <Photos img={q.img}
										   key={q.img} />
						})
					}
				</div>
			</div>
		);
	}
});

var Events = React.createClass({
	render() {
		return (
			<div className="eventCard">
				<div className="eventImage">
					<img src={this.props.img}/>
				</div>
				<div className="eventInfo">
					<div className="eventName">
						<a href={this.props.link}><h2>{this.props.show}</h2></a>
					</div>
					<div className="eventDate">
						<h3>{this.props.date}</h3>
					</div>
					<div className="eventDesc">
						<p>{this.props.desc}</p>
					</div>
				</div>
			</div>
		)
	}
})

var Photos = React.createClass({
	render() {
		return (
			<img src={this.props.img}/>
				
		)
	}
})

export default Home;
import React, { Component } from 'react';
import Watch from '../Watch/Watch'
import Listen from '../Listen/Listen'
import Connect from '../Connect/Connect'
import Learn from '../Learn/Learn'

class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.handleClick = this.handleClick.bind(this)
		this.close = this.close.bind(this)
	}
	handleClick(e) {
		this.setState({section: e.target.value})
	}

	getSection() {
		if( this.state.section ) {
				switch(this.state.section) {
					case 'watch':
						return <Watch close={this.close} youtube={this.props.content.youtube}/>
						break;
					case 'learn':
						return <Learn close={this.close} endpoint={this.props.endpoint} intro={this.props.content.intro} comments={this.props.content.comments} pictures={this.props.content.pictures} songs={this.props.content.sets}/>
						break;
					case 'listen':
						return <Listen close={this.close} endpoint={this.props.endpoint} songs={this.props.content.songs}/>
						break;
					case 'connect':
						return <Connect close={this.close} endpoint={this.props.endpoint} facebook={this.props.content.facebook} twitter={this.props.content.twitter} email={this.props.content.email}/>
						break;	
					default:
					  break; 	
				}
			}

	}

	close() {
		this.setState({section : undefined})
	}

	render() {
		return(
		<div>
		
		  {this.getSection()}	
		<div className='Nav'>
		  <button onClick = { this.handleClick } value = 'learn'> Learn </button>
		  <button onClick = { this.handleClick } value = 'listen'> Listen </button>
		  <button onClick = { this.handleClick } value = 'watch'>Watch</button>
		  <button onClick = { this.handleClick } value = 'connect'>Connect</button>
		</div>
		</div>
		)
	}
}

export default Nav
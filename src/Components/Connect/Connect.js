import React from 'react'
import Calendar from '../Calendar/Calendar'
import Facebook from '../Facebook/Facebook'
import Twitter from '../Twitter/Twitter'
import Comment from '../Comment/Comment'
import Mail from '../Mail/Mail'


const Connections = ['facebook','twitter','mail','calendar','comment']

class Connect extends React.Component {

	constructor(props) {
		super(props)
		this.state = {calendar: 'none', facebook: 'none', twitter: 'none', mail: 'none', comment: 'none'}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e)
	{
		let state = this.state
		state = {calendar: 'none', facebook: 'none', twitter: 'none', mail: 'none', comment: 'none'}
	  state[e.target.name]='initial'
	  this.setState(state)
	}

	render() {
		return(
			<div className='section'>
			<img src={require('../../resources/images/close.png')} onClick={this.props.close} className='close'/>
				{
					Connections.map(connection=>{
						return(
							<div id={connection} className='icons'>
									<img src={require('../../resources/images/'+connection+'.png')} name={connection} onClick={this.handleClick}/>
							</div>
						)
					})
				}
				<Calendar display={{display:this.state.calendar}}/>
				<Facebook display={{display:this.state.facebook}} facebook={this.props.facebook}/>
				<Twitter display={{display:this.state.twitter}} twitter={this.props.twitter}/>
				<Mail display={{display:this.state.mail}} email={this.props.email}/>
				<Comment endpoint={this.props.endpoint} display={{display:this.state.comment}} />
			</div>
		)
	}
}

export default Connect
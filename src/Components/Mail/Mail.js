import React from 'react'

class Mail extends React.Component {


	render() {
		return(
				<div className = 'container' style={this.props.display}>
				  <div className = 'decontainer' >
				  <img src={require('../../resources/images/mailbox.png')} />
					<p><a style={{height: '100%', width: '100%', marginTop: '10rem'}}href={this.props.email} target="_top">{this.props.email.split(/[:?]/)[1]}</a></p>
				</div>
				</div>
				)
	}
}

export default Mail
import React from 'react'

class Watch extends React.Component {
	render() {
		return(
			<div className='section'>
			<img src={require('../../resources/images/close.png')} onClick={this.props.close} className='close'/>
  <iframe  className='youtube' width="100%" height="100%" src={this.props.youtube} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
			</div>
		)
	}
}

export default Watch
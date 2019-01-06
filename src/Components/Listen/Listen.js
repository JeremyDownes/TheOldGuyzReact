import React from 'react'

class Listen extends React.Component {

	render() {
		return(
			<div className='section'>
			<img src={require('../../resources/images/close.png')} onClick={this.props.close} className='close'/>
			<div className='songContainer'>
			{this.props.songs? this.props.songs.map(track=>{ 
          return ( <div>
          					<p className='small'> {track.title} </p>
          					<br/>
          					<audio ref="audio_tag" src={this.props.endpoint +'/'+track.path} controls />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </div>
                  )
        }):null}  
			</div>
			</div>
		)
	}
}

export default Listen
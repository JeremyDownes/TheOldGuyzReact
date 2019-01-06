import React from 'react'

class Gallery extends React.Component {

	render() {
		return (
			<div className='gallery'>
				{this.props.pictures.map(picture=>{
					return (
					<div className='picture'> 
						<img src={this.props.endpoint+'/'+picture.path}/>
						<p>{picture.caption}</p>
						<br/>
					</div>
					)})}
					<br/>
					<br/>
					<br/>
			</div>
		)
	}
}

export default Gallery
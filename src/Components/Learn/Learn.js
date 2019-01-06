import Comments from '../Comments/Comments'
import Gallery from '../Gallery/Gallery'
import Songs from '../Songs/Songs'
import React from 'react'

class Learn extends React.Component {

	constructor(props) {
		super(props)
		this.state = {gallery: 'none', songs: 'none', comments: 'none'}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e)
	{
		let state = this.state
		state = {gallery: 'none', songs: 'none', comments: 'none'}
	  state[e.target.id]='initial'
	  this.setState(state)
	}


	render() {
		let intro =	[0,

		this.props.intro]
		let length = intro.reduce((a,b)=>{return a + b.length})
		document.querySelector('html').style.setProperty('--scroll-distance', length*-.4+'%')
		document.querySelector('html').style.setProperty('--scroll-duration', length*.05+'s')
		intro[0]=null
		

		return(
			<div className='section containScroll'>
			<div className='fixedNav' >
			<button className='sectionButton' id='gallery' onClick={this.handleClick}>Gallery</button> 
			<button className='sectionButton' id='songs' onClick={this.handleClick}>Songs</button> 
			<button className='sectionButton' id='comments' onClick={this.handleClick}>Comments</button>
			<img src={require('../../resources/images/close.png')} onClick={this.props.close} className='close'/>
			</div>
			<div className='containedContent'>
			<div style={{display: this.state.gallery}}> <Gallery pictures={this.props.pictures} endpoint={this.props.endpoint}/> </div>
			<div style={{display: this.state.songs}}> <Songs songs={this.props.songs} /> </div>
			<div style={{display: this.state.comments}}> <Comments comments={this.props.comments}/> </div>
			</div>
			<div className='scroll'>			
			<img className='containedImg' src= {require('../../resources/images/OldGuyzLogo.png')} />
			{intro[1].split('*').map((p)=>{ return <div> <p> {p} </p> <br></br> </div>})}
			<br></br>

	</div>
			</div>
		)
	}
}

export default Learn

import React from 'react'

class Songs extends React.Component {

	constructor(props) {
		super(props)
		this.state={}
		this.toggle = this.toggle.bind(this)
		this.getSongs=this.getSongs.bind(this)
		this.sets=[]
		let x=[] 
		this.props.songs.forEach(song=>{this.sets.push(song.sets)})
		this.sets = new Set(this.sets)
		this.sets.forEach(set=>{x.push(set)})
		this.sets = x
	}

	getSongs(sets) {
		if(sets===this.state.active) {
		let songs = this.props.songs.filter((song)=>{ return song.sets === sets})
		return (
			<div className='songList'> 
				{songs.map((song)=>{ 
					return (
						<div className='songInfo'> 
							<span>{song.artist}</span>     
							<span>{song.title}</span>
						</div>
					)
				})}
			</div>
			)
		}
	}	

	toggle(e) {
		this.state.active === e.target.id ? this.setState({active: null}) : this.setState({active: e.target.id})
	}

	render() {
		return (
			<div>
				{this.sets.map(sets=> { return ( 
					<div>
						<button id={sets} className='setButton' onClick={this.toggle}>{sets}</button>
						<div>{this.getSongs(sets)}</div>
					</div>
					)
				})
			}
			<br/>
			<br/>
			<br/>
			</div>
		)
	}
}

export default Songs
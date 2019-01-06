import React from 'react'

class Comment extends React.Component {
	constructor(props) {
		super(props) 
		this.post = this.post.bind(this)
	}


	async post() {
		let nom = document.getElementById('nom').value
		let comment = document.getElementById('userComment').value
		let date = new Date()
		if(nom && comment) {
			await fetch(this.props.endpoint+'/add/comment', {
				method: 'PUT',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({name: nom, comment: comment, date: date} )
			})
			.then(alert('Thank You. Your comment has been posted on our wall.')) 
		} 
	}


	render() {
		return(
				<div className = 'container' style={this.props.display}>
				<div className = 'commentContainer'>
				<br/>
				<br/>
				<h1>We'd love to hear what you think !</h1>
				<input placeholder = 'Name' id='nom' />
				<br/>
				<br/>
				<textarea placeholder = 'comment' id='userComment' />
				<br/>	
				<button onClick={this.post}>Post Comment </button>
				</div>
	  </div>
)
  }
}

export default Comment

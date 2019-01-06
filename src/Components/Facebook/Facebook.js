import React from 'react'

class Facebook extends React.Component {

	getFacebook() {
 		return window.innerHeight < window.innerWidth ? <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftheoldguyz%2Fposts%2F2067713596874287&width=500" className='facebook' width="500" height="255" style={{border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> : <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftheoldguyz%2Fposts%2F2067713596874287&width=300&show_text=true&appId=503999163433979&height=269" width="300" height="269" style={{border:'none', overflow:'hidden', margin: '-4rem 0 0 -3rem'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
	
	}

	render() {
		return(
				<div className = 'container' style={this.props.display}>

	  
	  {this.getFacebook()}
	  </div>
)
  }
}

export default Facebook

//  http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com/theoldguyz&amp;layout=button_count&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp
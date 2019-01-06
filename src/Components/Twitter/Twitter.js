import React from 'react'
import TweetEmbed from 'react-tweet-embed'

class Twitter extends React.Component {


	render() {
		let x = '1063583101723529216'
		return(
				<div className = 'container' style={this.props.display}>
				<TweetEmbed id={x} className={window.innerHeight>window.Innerwidth? 'twitter': null}/>
  		</div>
)
  }
}

export default Twitter

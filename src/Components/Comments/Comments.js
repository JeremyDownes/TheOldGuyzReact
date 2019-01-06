import React from 'react'

class Comments extends React.Component {

	render() {
		return (
			<div>
			<br/>
				{this.props.comments.map(comment=>{
					let date = new Date(comment.date)
					return (
					<div className='comment'> 
						<p>{comment.name} on {date.toDateString()} wrote:</p>
						<br />
						<p>{comment.comment}</p>
						<br/>
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

export default Comments
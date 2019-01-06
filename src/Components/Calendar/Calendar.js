import React from 'react'

class Calendar extends React.Component {
	constructor(props) {
		super(props)
		this.getMonthName= this.getMonthName.bind(this)
		this.buildDates = this.buildDates.bind(this)
		this.changeMonth = this.changeMonth.bind(this)
		this.state={}
		let d = new Date()
		let off = new Date()
		off.setDate(1)
		this.offset = off.getDay()
		this.state.day = d.getDay() // 0-6
		this.state.date = d.getDate() // 1-31
		this.state.month = d.getMonth() // 0-11
		this.state.year = d.getFullYear() 
		this.dates = new Array(this.offset)
		this.dates.fill('')
		while(off.getMonth() === this.state.month) {
			this.dates.push({string: off, date: off.getDate()})
			off.setDate(off.getDate()+1)
		}
		this.events = {}
	}

	getRegulars() {
						
						let regulars = {}
						this.dates.forEach(date=>{
							let test = new Date(this.state.year,this.state.month,date.date).getDay()
							if(test === 5) { regulars[date.date] = {title: 'Cactus Jacks', location: 'North Fort Myers', time: '6-9pm'} }
							if(test === 4) { regulars[date.date] = 	{title: "Angela's Cafe", location: 'Punta Gorda', time: '6-9pm'} }
						})
		return regulars
	}


	getMonthName(num) {
		switch(num) {
			case 0:
			  return 'January'
			  break;
			case 1:
			  return 'February'
			  break;
			case 2:
			  return 'March'
			  break;
			case 3:
			  return 'April'
			  break;
			case 4:
			  return 'May'
			  break;
			case 5:
			  return 'June'
			  break;
			case 6:
			  return 'July'
			  break;
			case 7:
			  return 'August'
			  break;
			case 8:
			  return 'September'
			  break;
			case 9:
			  return 'October'
			  break;
			case 10:
			  return 'November'
			  break;
			case 11:
			  return 'December'
			  break;
			default:
				return
				break;
		}
	}

	changeMonth(e) {
		let state = this.state
		state.year = e.target.className === 'back' && state.month === 0? state.year -1 : e.target.className !== 'back' && state.month === 11? state.year + 1 : state.year
		state.month = e.target.className === 'back' ? (state.month -1)%12 : (state.month+1)%12
		let off = new Date(state.year,state.month,1)
		state.month = off.getMonth()
		let offset= off.getDay()
		this.offset = offset
		this.dates = new Array(this.offset)
		this.dates.fill('')
		console.log(off.getMonth()+' ' +state.month)
		while(off.getMonth() === state.month) {
			this.dates.push({string: off, date: off.getDate()})
			off.setDate(off.getDate()+1)
		}
		this.setState(state)
	} 

	buildDates() {
// this.events[currentMonth][date.date]? this.showEvent: console.log('error')

		this.events[this.getMonthName(this.state.month)+this.state.year] = this.getRegulars()
		return (
				this.dates.map(date=> {
					let theDate = date.date? date.date : ''
					let today= new Date()
					let currentMonth = this.getMonthName(this.state.month)+this.state.year
					let style
					if(this.events[currentMonth]) {
						if(this.events[currentMonth][date.date]) {
							style =  {backgroundColor: 'rgba(0,255,0,.4)'}
							theDate = 
							 (
								<div className='calendarInfo'>
									<ul>
										<li>{this.events[currentMonth][date.date].title}</li>
										<li>{this.events[currentMonth][date.date].location}</li>
										<li>{this.events[currentMonth][date.date].time}</li>
									</ul>
								</div>
							)
						}
					}

					return (
						<div className='day' onClick={this.showEvent} id={date.date} style={style? style: today.getDate()===date.date && today.getMonth()===this.state.month && today.getFullYear()===this.state.year? {backgroundColor: 'rgba(0,0,255,.5)'} : {}}> 
						{theDate}

						</div>
					)
				})
			)
	}

	showEvent(e) {
		//alert(e.target.id)
	}

	render() {
		return(
				<div className = 'container' style={this.props.display}>
				<h1> <span className='back' onClick={this.changeMonth} style={{float:'left', marginLeft:'2rem'}} >&lt;</span>{this.getMonthName(this.state.month)} {this.state.year}<span onClick={this.changeMonth} style={{float:'right', marginRight:'2rem'}}> &gt; </span></h1>
			<div className='calendar' >
				{this.buildDates()}
			</div>
			</div>
		)
	}
}

export default Calendar
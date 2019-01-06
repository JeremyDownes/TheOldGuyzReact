import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'

const scale = window.innerHeight <= window.innerWidth ? window.innerHeight : window.innerWidth
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.endpoint = window.location.hostname
    this.endpoint= 'http://'+this.endpoint+':4001'
    this.endpoint = 'http://express.theoldguyz.com'
    this.getContent()
  }

  async getContent() {
    return await fetch(this.endpoint+'/content',{headers: {'Access-Control-Allow-Origin' : '*'}}).then((res) => res.json()).then((json)=> {
      let content = json[0]
      this.setState({
        content : {
          intro: content.intro,
          facebook: content.facebook,
          twitter: content.twitter,
          youtube: content.youtube,
          email: content.email
        }
      },()=>{this.getComments()})
    }) 
  }

  async getComments() {
    await fetch(this.endpoint+'/comments').then((res) => res.json()).then((json)=> {
      let content = this.state.content
      content.comments=json
      this.setState({content: content},()=>{this.getPictures()})
    })
  }

  async getPictures() {
    await fetch(this.endpoint+'/pictures').then((res) => res.json()).then((json)=> {
      let content = this.state.content
      content.pictures=json
      this.setState({content: content},()=>{this.getSongs()})
    })
  }

  async getSongs() {
    await fetch(this.endpoint+'/tracks').then((res) => res.json()).then((json)=> {
      let content = this.state.content
      content.songs=json
      this.setState({content: content},()=>{this.getSets()}) // call next function
    })
  }

  async getSets() {
    await fetch(this.endpoint+'/songs').then((res) => res.json()).then((json)=> {
      let content = this.state.content
      content.sets=json
      this.setState({content: content},()=>{}) // call next function
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Old Guyz</h1>
        </header>
      	<Nav content={this.state.content} endpoint={this.endpoint}/>
      <div className='spacer'>
      </div>
      </div>
    );
  }
}

export default App;
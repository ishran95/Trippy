import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    }
}
componentDidMount(){
  
}
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from "@reach/router";

export default class IndividualStadium extends Component {
  render() {
    return (
      <div>
        <Link to='/'> <button className='home-button'>Home</button></Link>
        <h1>hello from individual stadium</h1>
      </div>
    )
  }
}

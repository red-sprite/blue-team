import React, { Component } from 'react'

export default class Gun extends Component {

  state = {
    targets: [],
    hits: [],
  }

  // Select a random number from 0 to 9
  selectNum = () => Math.round(Math.random() * 9);

  // Select target
  selectCoordinates = () => {
    let x = this.selectNum();
    let y = this.selectNum();

    const target = {
      x,
      y
    };

    return target;
  }

  handleFireResponse = res => {
    // TODO: do something with the response
    console.log(res);
    this.setState({
      ...this.state,
      hits: [...this.state.hits, res],
    })
  }

  fire = () => {
    const target = this.selectCoordinates();
    this.handleFireResponse(target);
    // shoot(target.x, target.y, handleResponse);
  };

  render() {
    return (
      <div>
        <button onClick={this.fire}>Fire Test Shot</button>
      </div>
    )
  }
}

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
  }

  fire = () => {
    const target = this.selectCoordinates();
    handleResponse(target);
    // shoot(target.x, target.y, handleResponse);
  };

  render() {
    return (
      <div>
        <button conClick={this.fire()}>Fire Test Shot</button>
      </div>
    )
  }
}

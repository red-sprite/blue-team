import React, { Component } from 'react'

export default class Gun extends Component {

  state = {
    targets: [
      { x: 0, y: 0, priority: 1 },
      { x: 0, y: 1, priority: 1 },
      { x: 0, y: 2, priority: 1 },
      { x: 0, y: 3, priority: 1 },
      { x: 0, y: 4, priority: 1 },
      { x: 0, y: 5, priority: 1 },
      { x: 0, y: 6, priority: 1 },
      { x: 0, y: 7, priority: 1 },
      { x: 0, y: 8, priority: 1 },
      { x: 0, y: 9, priority: 1 },
      { x: 1, y: 0, priority: 1 },
      { x: 1, y: 1, priority: 1 },
      { x: 1, y: 2, priority: 1 },
      { x: 1, y: 3, priority: 1 },
      { x: 1, y: 4, priority: 1 },
      { x: 1, y: 5, priority: 1 },
      { x: 1, y: 6, priority: 1 },
      { x: 1, y: 7, priority: 1 },
      { x: 1, y: 8, priority: 1 },
      { x: 1, y: 9, priority: 1 },
      { x: 2, y: 0, priority: 1 },
      { x: 2, y: 1, priority: 1 },
      { x: 2, y: 2, priority: 1 },
      { x: 2, y: 3, priority: 1 },
      { x: 2, y: 4, priority: 1 },
      { x: 2, y: 5, priority: 1 },
      { x: 2, y: 6, priority: 1 },
      { x: 2, y: 7, priority: 1 },
      { x: 2, y: 8, priority: 1 },
      { x: 2, y: 9, priority: 1 },
      { x: 3, y: 0, priority: 1 },
      { x: 3, y: 1, priority: 1 },
      { x: 3, y: 2, priority: 1 },
      { x: 3, y: 3, priority: 1 },
      { x: 3, y: 4, priority: 1 },
      { x: 3, y: 5, priority: 1 },
      { x: 3, y: 6, priority: 1 },
      { x: 3, y: 7, priority: 1 },
      { x: 3, y: 8, priority: 1 },
      { x: 3, y: 9, priority: 1 },
      { x: 4, y: 0, priority: 1 },
      { x: 4, y: 1, priority: 1 },
      { x: 4, y: 2, priority: 1 },
      { x: 4, y: 3, priority: 1 },
      { x: 4, y: 4, priority: 1 },
      { x: 4, y: 5, priority: 1 },
      { x: 4, y: 6, priority: 1 },
      { x: 4, y: 7, priority: 1 },
      { x: 4, y: 8, priority: 1 },
      { x: 4, y: 9, priority: 1 },
      { x: 5, y: 0, priority: 1 },
      { x: 5, y: 1, priority: 1 },
      { x: 5, y: 2, priority: 1 },
      { x: 5, y: 3, priority: 1 },
      { x: 5, y: 4, priority: 1 },
      { x: 5, y: 5, priority: 1 },
      { x: 5, y: 6, priority: 1 },
      { x: 5, y: 7, priority: 1 },
      { x: 5, y: 8, priority: 1 },
      { x: 5, y: 9, priority: 1 },
      { x: 6, y: 0, priority: 1 },
      { x: 6, y: 1, priority: 1 },
      { x: 6, y: 2, priority: 1 },
      { x: 6, y: 3, priority: 1 },
      { x: 6, y: 4, priority: 1 },
      { x: 6, y: 5, priority: 1 },
      { x: 6, y: 6, priority: 1 },
      { x: 6, y: 7, priority: 1 },
      { x: 6, y: 8, priority: 1 },
      { x: 6, y: 9, priority: 1 },
      { x: 7, y: 0, priority: 1 },
      { x: 7, y: 1, priority: 1 },
      { x: 7, y: 2, priority: 1 },
      { x: 7, y: 3, priority: 1 },
      { x: 7, y: 4, priority: 1 },
      { x: 7, y: 5, priority: 1 },
      { x: 7, y: 6, priority: 1 },
      { x: 7, y: 7, priority: 1 },
      { x: 7, y: 8, priority: 1 },
      { x: 7, y: 9, priority: 1 },
      { x: 8, y: 0, priority: 1 },
      { x: 8, y: 1, priority: 1 },
      { x: 8, y: 2, priority: 1 },
      { x: 8, y: 3, priority: 1 },
      { x: 8, y: 4, priority: 1 },
      { x: 8, y: 5, priority: 1 },
      { x: 8, y: 6, priority: 1 },
      { x: 8, y: 7, priority: 1 },
      { x: 8, y: 8, priority: 1 },
      { x: 8, y: 9, priority: 1 },
      { x: 9, y: 0, priority: 1 },
      { x: 9, y: 1, priority: 1 },
      { x: 9, y: 2, priority: 1 },
      { x: 9, y: 3, priority: 1 },
      { x: 9, y: 4, priority: 1 },
      { x: 9, y: 5, priority: 1 },
      { x: 9, y: 6, priority: 1 },
      { x: 9, y: 7, priority: 1 },
      { x: 9, y: 8, priority: 1 },
      { x: 9, y: 9, priority: 1 },
    ]
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

    const shot = res;

    this.setState(state => {
      const targets = state.targets.map(target => {
        if (target.x === shot.x && target.y === shot.y) {
          target.priority = 0;
          return target;
        } else {
          return target;
        }
      })

      return targets;

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

import React, { Component } from 'react'
import _ from 'lodash';

export default class Gun extends Component {

  state = {
    targets: [
      { x: 0, y: 0, priority: 1, hit: false, miss: false, },
      { x: 0, y: 1, priority: 1, hit: false, miss: false, },
      { x: 0, y: 2, priority: 1, hit: false, miss: false, },
      { x: 0, y: 3, priority: 1, hit: false, miss: false, },
      { x: 0, y: 4, priority: 1, hit: false, miss: false, },
      { x: 0, y: 5, priority: 25, hit: false, miss: false, },
      { x: 0, y: 6, priority: 25, hit: false, miss: false, },
      { x: 0, y: 7, priority: 25, hit: false, miss: false, },
      { x: 0, y: 8, priority: 25, hit: false, miss: false, },
      { x: 0, y: 9, priority: 1, hit: false, miss: false, },
      { x: 1, y: 0, priority: 1, hit: false, miss: false, },
      { x: 1, y: 1, priority: 1, hit: false, miss: false, },
      { x: 1, y: 2, priority: 1, hit: false, miss: false, },
      { x: 1, y: 3, priority: 1, hit: false, miss: false, },
      { x: 1, y: 4, priority: 1, hit: false, miss: false, },
      { x: 1, y: 5, priority: 1, hit: false, miss: false, },
      { x: 1, y: 6, priority: 1, hit: false, miss: false, },
      { x: 1, y: 7, priority: 1, hit: false, miss: false, },
      { x: 1, y: 8, priority: 1, hit: false, miss: false, },
      { x: 1, y: 9, priority: 1, hit: false, miss: false, },
      { x: 2, y: 0, priority: 1, hit: false, miss: false, },
      { x: 2, y: 1, priority: 1, hit: false, miss: false, },
      { x: 2, y: 2, priority: 1, hit: false, miss: false, },
      { x: 2, y: 3, priority: 1, hit: false, miss: false, },
      { x: 2, y: 4, priority: 1, hit: false, miss: false, },
      { x: 2, y: 5, priority: 1, hit: false, miss: false, },
      { x: 2, y: 6, priority: 1, hit: false, miss: false, },
      { x: 2, y: 7, priority: 1, hit: false, miss: false, },
      { x: 2, y: 8, priority: 1, hit: false, miss: false, },
      { x: 2, y: 9, priority: 1, hit: false, miss: false, },
      { x: 3, y: 0, priority: 1, hit: false, miss: false, },
      { x: 3, y: 1, priority: 1, hit: false, miss: false, },
      { x: 3, y: 2, priority: 1, hit: false, miss: false, },
      { x: 3, y: 3, priority: 1, hit: false, miss: false, },
      { x: 3, y: 4, priority: 1, hit: false, miss: false, },
      { x: 3, y: 5, priority: 1, hit: false, miss: false, },
      { x: 3, y: 6, priority: 1, hit: false, miss: false, },
      { x: 3, y: 7, priority: 1, hit: false, miss: false, },
      { x: 3, y: 8, priority: 1, hit: false, miss: false, },
      { x: 3, y: 9, priority: 1, hit: false, miss: false, },
      { x: 4, y: 0, priority: 1, hit: false, miss: false, },
      { x: 4, y: 1, priority: 1, hit: false, miss: false, },
      { x: 4, y: 2, priority: 1, hit: false, miss: false, },
      { x: 4, y: 3, priority: 1, hit: false, miss: false, },
      { x: 4, y: 4, priority: 1, hit: false, miss: false, },
      { x: 4, y: 5, priority: 1, hit: false, miss: false, },
      { x: 4, y: 6, priority: 1, hit: false, miss: false, },
      { x: 4, y: 7, priority: 1, hit: false, miss: false, },
      { x: 4, y: 8, priority: 1, hit: false, miss: false, },
      { x: 4, y: 9, priority: 1, hit: false, miss: false, },
      { x: 5, y: 0, priority: 1, hit: false, miss: false, },
      { x: 5, y: 1, priority: 1, hit: false, miss: false, },
      { x: 5, y: 2, priority: 1, hit: false, miss: false, },
      { x: 5, y: 3, priority: 1, hit: false, miss: false, },
      { x: 5, y: 4, priority: 1, hit: false, miss: false, },
      { x: 5, y: 5, priority: 1, hit: false, miss: false, },
      { x: 5, y: 6, priority: 1, hit: false, miss: false, },
      { x: 5, y: 7, priority: 1, hit: false, miss: false, },
      { x: 5, y: 8, priority: 1, hit: false, miss: false, },
      { x: 5, y: 9, priority: 1, hit: false, miss: false, },
      { x: 6, y: 0, priority: 1, hit: false, miss: false, },
      { x: 6, y: 1, priority: 1, hit: false, miss: false, },
      { x: 6, y: 2, priority: 1, hit: false, miss: false, },
      { x: 6, y: 3, priority: 1, hit: false, miss: false, },
      { x: 6, y: 4, priority: 1, hit: false, miss: false, },
      { x: 6, y: 5, priority: 1, hit: false, miss: false, },
      { x: 6, y: 6, priority: 1, hit: false, miss: false, },
      { x: 6, y: 7, priority: 1, hit: false, miss: false, },
      { x: 6, y: 8, priority: 1, hit: false, miss: false, },
      { x: 6, y: 9, priority: 1, hit: false, miss: false, },
      { x: 7, y: 0, priority: 1, hit: false, miss: false, },
      { x: 7, y: 1, priority: 1, hit: false, miss: false, },
      { x: 7, y: 2, priority: 1, hit: false, miss: false, },
      { x: 7, y: 3, priority: 1, hit: false, miss: false, },
      { x: 7, y: 4, priority: 1, hit: false, miss: false, },
      { x: 7, y: 5, priority: 1, hit: false, miss: false, },
      { x: 7, y: 6, priority: 1, hit: false, miss: false, },
      { x: 7, y: 7, priority: 1, hit: false, miss: false, },
      { x: 7, y: 8, priority: 1, hit: false, miss: false, },
      { x: 7, y: 9, priority: 1, hit: false, miss: false, },
      { x: 8, y: 0, priority: 1, hit: false, miss: false, },
      { x: 8, y: 1, priority: 1, hit: false, miss: false, },
      { x: 8, y: 2, priority: 1, hit: false, miss: false, },
      { x: 8, y: 3, priority: 1, hit: false, miss: false, },
      { x: 8, y: 4, priority: 1, hit: false, miss: false, },
      { x: 8, y: 5, priority: 1, hit: false, miss: false, },
      { x: 8, y: 6, priority: 1, hit: false, miss: false, },
      { x: 8, y: 7, priority: 1, hit: false, miss: false, },
      { x: 8, y: 8, priority: 1, hit: false, miss: false, },
      { x: 8, y: 9, priority: 1, hit: false, miss: false, },
      { x: 9, y: 0, priority: 1, hit: false, miss: false, },
      { x: 9, y: 1, priority: 1, hit: false, miss: false, },
      { x: 9, y: 2, priority: 1, hit: false, miss: false, },
      { x: 9, y: 3, priority: 1, hit: false, miss: false, },
      { x: 9, y: 4, priority: 1, hit: false, miss: false, },
      { x: 9, y: 5, priority: 1, hit: false, miss: false, },
      { x: 9, y: 6, priority: 1, hit: false, miss: false, },
      { x: 9, y: 7, priority: 1, hit: false, miss: false, },
      { x: 9, y: 8, priority: 1, hit: false, miss: false, },
      { x: 9, y: 9, priority: 1, hit: false, miss: false, },
    ]
  }

  // Select target
  selectTarget = () => {

    // Find highest priority value of across all targets
    const priority = Math.max.apply(Math, this.state.targets.map(target => (target.priority)));

    // Select highest priority targets
    const priorityTargets = _.filter(this.state.targets, { 'priority': priority });

    // Select specific target at random
    const target = priorityTargets[Math.floor(Math.random() * priorityTargets.length)];

    return target;

  }

  handleMiss = shot => {
    this.setState(state => {
      const targets = state.targets.map(target => {
        if (target.x === shot.x && target.y === shot.y) {
          target.miss = true;
          target.priority = 0;
          return target;
        } else {
          return target;
        }
      })
      return targets;
    })
  }

  handleHit = shot => {
    this.setState(state => {
      const targets = state.targets.map(target => {

        // Update this target
        if (target.x === shot.x && target.y === shot.y) {
          target.priority = 0;
          target.hit = true;
          return target;
        } else if (

          // Update priority of valid targets next to this one
          target.priority > 0 &&
          (
            (target.x === shot.x + 1 && target.y === shot.y) ||
            (target.x === shot.x - 1 && target.y === shot.y) ||
            (target.x === shot.x && target.y === shot.y + 1) ||
            (target.x === shot.x && target.y === shot.y - 1)
          )
        ) {
          target.priority = 25;
          return target;
        } else {
          return target;
        }
      })
      return targets;
    })
  }

  handleSunk = shot => {

  }





  handleFireResponse = res => {
    // TODO: do something with the response

    const shot = res;

    switch (shot.outcome) {
      case 'hit':
        this.handleHit(shot);
        break;
      case 'miss':
        this.handleMiss(shot);
        break;
      default:
        console.log('shot disapeared through a worm hole');
    }

  }

  fire = () => {
    const target = this.selectTarget();
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

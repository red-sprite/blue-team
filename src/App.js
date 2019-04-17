import React, { Component } from "react";
import style from "./App.module.css";
import { getInitialPlacement } from "./initialPlacement";
import { fire } from "./logic/fireShot";
import { protocol } from "./protocol";

class App extends Component {
  // Render cells
  // Each cell has a state.

  constructor() {
    super();
    // This sets up the starting grid. Each cell is populated.
    // When the Play button is pressed the ships are positioned.
    let startingGridData = new Array(10);
    for (var i = 0; i < startingGridData.length; i++) {
      startingGridData[i] = new Array(10);
    }
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        startingGridData[x][y] = {
          containsShip: false,
          isShot: false,
          shipId: ""
        };
      }
    }
    console.log("starting grid", startingGridData);

    this.protocol =new protocol()

    this.state = {
      gridData: startingGridData,
      shipRemainingHits: {
        a: 5,
        b: 4,
        c: 3,
        d: 3,
        e: 2
      },
      ourShotHistory: []
    };
  }

  testIncomingHits = () => {
    const testData = [{ x: 2, y: 2 }, { x: 9, y: 4 }, { x: 5, y: 3 }];
    testData.forEach(incomingShotObject => {
      console.log("response test:", this.returnResponse(incomingShotObject));
    });
  };

  returnResponse = incomingShotObject => {
    // Save their attempts?

    //  object = { x: 0, y: 2 }
    const { x, y } = incomingShotObject;
    let cellHit = this.state.gridData[x][y];
    let shipId = cellHit.shipId;
    var response = "";
    var newHitsLeft = 10;

    if (cellHit.containsShip) {
      newHitsLeft = this.state.shipRemainingHits[shipId] - 1;
      response = newHitsLeft === 0 ? "hit and sunk" : "hit";
    } else {
      response = "miss";
    }

    const newShipRemainingHits = {
      ...this.state.shipRemainingHits,
      [shipId]: newHitsLeft
    };
    // Update the grid
    let newGridData = [...this.state.gridData];
    newGridData[x][y] = { ...cellHit, isShot: true };

    this.setState({
      shipRemainingHits: newShipRemainingHits,
      gridData: newGridData
    });

    this.handleFirePressed();
    return response;
  };

  checkIfWeLost = () => {
    const { shipRemainingHits } = this.state;
  };

  handleFirePressed = () => {
    fire(newShots => {
      this.updateShotHistory(newShots);
    }, this.state.ourShotHistory);
  };

  updateShotHistory = newShots => {
    let newShotHistory = [...this.state.ourShotHistory, newShots];
    this.setState({
      ourShotHistory: newShotHistory
    });
    console.log("our shot history: ", newShotHistory);
  };

  handleInitialSetup = () => {
    const updatedGridData = [...this.state.gridData];
    let ships = getInitialPlacement(0);
    ships.forEach(cell => {
      updatedGridData[cell.x][cell.y] = cell;
    });
    this.setState({ gridData: updatedGridData });
  };

  render() {
    // Empty
    // Missed
    // Ship
    // Ship Hit

    const { gridData } = this.state;

    let cells = gridData.map(row => {
      return row.map(cell => {
        return (
          <div
            className={style.cell}
            style={{
              backgroundColor: cell.containsShip
                ? cell.isShot
                  ? "red"
                  : "grey"
                : cell.isShot
                ? "white"
                : "blue"
            }}
          />
        );
      });
    });

    // const shipId = "id";
    // const containsShip = true;
    // const isHit = false;

    // let cell = (
    //   <div
    //     className={style.cell}
    //     style={{
    //       backgroundColor: containsShip ? (isHit ? "red" : "blue") : "white"
    //     }}
    //   />
    // );

    return (
      <main className={style.main}>
        <h1>RedSprite Battleships</h1>
        <div className={style.grid1}>{cells}</div>
        <button onClick={this.handleInitialSetup}>PLAY</button>
        <button onClick={this.handleFirePressed}>START SHOOTING</button>
        <button onClick={this.testIncomingHits}>TEST</button>
      </main>
    );
  }
}

export default App;

// gridData: [
//   [
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false }
//   ],
//   [
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false }
//   ],
//   [
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false },
//     { containsShip: false, isShot: false }
//   ]
// ],

//

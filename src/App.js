import React, { Component } from "react";
import style from "./App.module.css";
import { getInitialPlacement } from "./initialPlacement";
import { fire } from "./logic/fireShot";

class App extends Component {
  // Render cells
  // Each cell has a state.

  constructor() {
    super();
    // This sets up the starting grid. Each cell is populated.
    // When the Play button is pressed
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

    this.state = {
      gridData: startingGridData,
      shipRemainingHits: {
        a: 5,
        b: 4,
        c: 3,
        d: 3,
        e: 2
      }
    };

    // TODO: Turn this off when live!
    // this.testIncomingHits();
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

    return response;
  };

  checkIfWeLost = () => {
    const { shipRemainingHits } = this.state;
    //
  };

  handleFirePressed = () => {
    fire(object => {
      this.setState({ shotsFired: object });
    }, console.log("set state after firing:", this.state.shotsFired));
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

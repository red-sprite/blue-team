import React, { Component } from "react";
import style from "./App.module.css";
import { getInitialPlacement } from "./initialPlacement";
import { fire } from "./logic/fireShot";
import { protocol } from "./protocol";
import Gun from "./components/Gun";

class App extends Component {
  constructor() {
    super();
    // This sets up the starting grid. Each cell is populated.
    // When the Play button is pressed the ships are positioned.

    this.protocol = new protocol(this.handleHit);

    this.state = {
      gridData: this.returnStartingGridData(),
      shipRemainingHits: {
        a: 5,
        b: 4,
        c: 3,
        d: 3,
        e: 2
      },
      ourShotHistory: [],
      weLost: false
    };
  }

  returnStartingGridData = () => {
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
    return startingGridData;
  };

  testIncomingHits = () => {
    const testData = [{ x: 2, y: 2 }, { x: 9, y: 4 }, { x: 5, y: 3 }];
    testData.forEach(incomingShotObject => {
      console.log("response test:", this.handleHit(incomingShotObject));
    });
  };

  handleHit = incomingShotObject => {
    // Save their attempts?

    //  object = { x: 0, y: 2 }
    const { x, y } = incomingShotObject;
    let cellHit = this.state.gridData[x][y];
    let shipId = cellHit.shipId;
    var response = "";
    var newHitsLeft = 10;

    if (cellHit.containsShip) {
      newHitsLeft = this.state.shipRemainingHits[shipId] - 1;
      // Sunk or Hit
      response = newHitsLeft === 0 ? "S" : "H";
    } else {
      // Miss
      response = "M";
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

    this.checkIfWeLost();
    return response;
  };

  checkIfWeLost = () => {
    const { shipRemainingHits } = this.state;
    let weLost = true;
    Object.entries(shipRemainingHits).forEach(([shipId, value]) => {
      if (value > 0) {
        weLost = false;
      }
    });
    console.log("have we lost?", weLost);
    this.setState({ weLost: weLost });
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

    // console.log("our shot history: ", newShotHistory);
    // if (newShotHistory.length < 5) {
    //   this.handleFirePressed();
    // }
  };

  placeOurShips = () => {
    const updatedGridData = [...this.state.gridData];
    let ships = getInitialPlacement(2);
    ships.forEach(cell => {
      updatedGridData[cell.x][cell.y] = cell;
    });
    this.setState({ gridData: updatedGridData });
  };

  resetBoard = () => {
    const emptyState = {
      gridData: this.returnStartingGridData(),
      shipRemainingHits: {
        a: 5,
        b: 4,
        c: 3,
        d: 3,
        e: 2
      },
      ourShotHistory: [],
      weLost: false
    };
    this.setState({ ...emptyState });
  };

  render() {
    // Empty
    // Missed
    // Ship
    // Ship Hit

    const { gridData, weLost } = this.state;

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

    return (
      <main className={style.main}>
        <h1>{weLost ? "GAME OVER - We Lost" : "RedSprite Battleships"}</h1>

        <div style={{ opacity: weLost ? 0.2 : 1 }} className={style.grid1}>
          {cells}
        </div>

        <div className={style.controls}>
          <button onClick={this.placeOurShips}>PLACE SHIPS</button>
          {weLost && <button onClick={this.resetBoard}>RESET</button>}
          <button onClick={this.handleFirePressed}>BEGIN SHOOTING</button>
          <button onClick={this.testIncomingHits}>TEST INCOMING SHOTS</button>
        </div>
        <Gun />
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

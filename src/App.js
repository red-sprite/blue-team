import React, { Component } from "react";
import style from "./App.module.css";
import { getInitialPlacement } from "./initialPlacement";

class App extends Component {
  // Render cells
  // Each cell has a state.

  constructor() {
    super();

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

    // console.log("initial placement", getInitialPlacement());
    let ships = getInitialPlacement();
    ships.forEach(cell => {
      startingGridData[cell.x][cell.y] = cell;
    });

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
  }

  testIncomingHits = () => {
    const testData = [];
  };

  returnResponse = incomingShotObject => {
    // Save their targets?

    //  object = { x: 0, y: 2 }
    const { x, y } = incomingShotObject;
    let cellHit = this.state.gridData[x][y];
    var response = "";
    if (cellHit.containsShip) {
      let shipId = cellHit.shipId;
      const newHitsLeft = this.state.shipRemainingHits[shipId] - 1;

      const newShipRemainingHits = {
        ...this.state.shipRemainingHits,
        [shipId]: newHitsLeft
      };

      this.setState({ shipRemainingHits: newShipRemainingHits });
      response = newHitsLeft === 0 ? "hit and sunk" : "hit";
    } else {
      response = "miss";
    }
    return response;
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
        <h1>RedStripe Battleships</h1>
        <div className={style.grid1}>{cells}</div>
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

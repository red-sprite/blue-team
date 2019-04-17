import React, { Component } from "react";
import style from "./App.module.css";

class App extends Component {
  // Render cells
  // Each cell has a state.

  state = {
    gridData: [
      [
        { containsShip: false },
        { containsShip: true },
        { containsShip: false }
      ],
      [
        { containsShip: false },
        { containsShip: true },
        { containsShip: false }
      ],
      [
        { containsShip: false },
        { containsShip: true, isShot: true },
        { containsShip: false }
      ]
    ],

    //
    shipRemainingHits: {
      a: 5,
      b: 4,
      c: 3,
      d: 3,
      e: 2
    }
  };

  returnResponse = coordinates => {
    // Check whether that cell contains a ship
    // If not - return miss
    // If it does -
    // deduct one from the shipRemainingHits from relevant hits.
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

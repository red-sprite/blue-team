import React, { Component } from 'react';
import { TweenMax } from 'gsap/all';
import style from './App.module.css';
import { getInitialPlacement } from './logic/initialPlacement';
// import { fire } from './logic/fireShot';
import { protocol } from './protocol';
import Gun from './components/Gun';
import _ from 'lodash';

class App extends Component {
	constructor() {
		super();
		this.protocol = new protocol(this.handleHit, this.fire);
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
			weLost: false,
			targets: [
				{ x: 0, y: 0, priority: 1, hit: false, miss: false },
				{ x: 0, y: 1, priority: 1, hit: false, miss: false },
				{ x: 0, y: 2, priority: 1, hit: false, miss: false },
				{ x: 0, y: 3, priority: 1, hit: false, miss: false },
				{ x: 0, y: 4, priority: 1, hit: false, miss: false },
				{ x: 0, y: 5, priority: 25, hit: false, miss: false },
				{ x: 0, y: 6, priority: 25, hit: false, miss: false },
				{ x: 0, y: 7, priority: 25, hit: false, miss: false },
				{ x: 0, y: 8, priority: 25, hit: false, miss: false },
				{ x: 0, y: 9, priority: 1, hit: false, miss: false },
				{ x: 1, y: 0, priority: 1, hit: false, miss: false },
				{ x: 1, y: 1, priority: 1, hit: false, miss: false },
				{ x: 1, y: 2, priority: 1, hit: false, miss: false },
				{ x: 1, y: 3, priority: 1, hit: false, miss: false },
				{ x: 1, y: 4, priority: 1, hit: false, miss: false },
				{ x: 1, y: 5, priority: 1, hit: false, miss: false },
				{ x: 1, y: 6, priority: 1, hit: false, miss: false },
				{ x: 1, y: 7, priority: 1, hit: false, miss: false },
				{ x: 1, y: 8, priority: 1, hit: false, miss: false },
				{ x: 1, y: 9, priority: 1, hit: false, miss: false },
				{ x: 2, y: 0, priority: 1, hit: false, miss: false },
				{ x: 2, y: 1, priority: 1, hit: false, miss: false },
				{ x: 2, y: 2, priority: 1, hit: false, miss: false },
				{ x: 2, y: 3, priority: 1, hit: false, miss: false },
				{ x: 2, y: 4, priority: 1, hit: false, miss: false },
				{ x: 2, y: 5, priority: 1, hit: false, miss: false },
				{ x: 2, y: 6, priority: 1, hit: false, miss: false },
				{ x: 2, y: 7, priority: 1, hit: false, miss: false },
				{ x: 2, y: 8, priority: 1, hit: false, miss: false },
				{ x: 2, y: 9, priority: 1, hit: false, miss: false },
				{ x: 3, y: 0, priority: 1, hit: false, miss: false },
				{ x: 3, y: 1, priority: 1, hit: false, miss: false },
				{ x: 3, y: 2, priority: 1, hit: false, miss: false },
				{ x: 3, y: 3, priority: 1, hit: false, miss: false },
				{ x: 3, y: 4, priority: 1, hit: false, miss: false },
				{ x: 3, y: 5, priority: 1, hit: false, miss: false },
				{ x: 3, y: 6, priority: 1, hit: false, miss: false },
				{ x: 3, y: 7, priority: 1, hit: false, miss: false },
				{ x: 3, y: 8, priority: 1, hit: false, miss: false },
				{ x: 3, y: 9, priority: 1, hit: false, miss: false },
				{ x: 4, y: 0, priority: 1, hit: false, miss: false },
				{ x: 4, y: 1, priority: 1, hit: false, miss: false },
				{ x: 4, y: 2, priority: 1, hit: false, miss: false },
				{ x: 4, y: 3, priority: 1, hit: false, miss: false },
				{ x: 4, y: 4, priority: 1, hit: false, miss: false },
				{ x: 4, y: 5, priority: 1, hit: false, miss: false },
				{ x: 4, y: 6, priority: 1, hit: false, miss: false },
				{ x: 4, y: 7, priority: 1, hit: false, miss: false },
				{ x: 4, y: 8, priority: 1, hit: false, miss: false },
				{ x: 4, y: 9, priority: 1, hit: false, miss: false },
				{ x: 5, y: 0, priority: 1, hit: false, miss: false },
				{ x: 5, y: 1, priority: 1, hit: false, miss: false },
				{ x: 5, y: 2, priority: 1, hit: false, miss: false },
				{ x: 5, y: 3, priority: 1, hit: false, miss: false },
				{ x: 5, y: 4, priority: 1, hit: false, miss: false },
				{ x: 5, y: 5, priority: 1, hit: false, miss: false },
				{ x: 5, y: 6, priority: 1, hit: false, miss: false },
				{ x: 5, y: 7, priority: 1, hit: false, miss: false },
				{ x: 5, y: 8, priority: 1, hit: false, miss: false },
				{ x: 5, y: 9, priority: 1, hit: false, miss: false },
				{ x: 6, y: 0, priority: 1, hit: false, miss: false },
				{ x: 6, y: 1, priority: 1, hit: false, miss: false },
				{ x: 6, y: 2, priority: 1, hit: false, miss: false },
				{ x: 6, y: 3, priority: 1, hit: false, miss: false },
				{ x: 6, y: 4, priority: 1, hit: false, miss: false },
				{ x: 6, y: 5, priority: 1, hit: false, miss: false },
				{ x: 6, y: 6, priority: 1, hit: false, miss: false },
				{ x: 6, y: 7, priority: 1, hit: false, miss: false },
				{ x: 6, y: 8, priority: 1, hit: false, miss: false },
				{ x: 6, y: 9, priority: 1, hit: false, miss: false },
				{ x: 7, y: 0, priority: 1, hit: false, miss: false },
				{ x: 7, y: 1, priority: 1, hit: false, miss: false },
				{ x: 7, y: 2, priority: 1, hit: false, miss: false },
				{ x: 7, y: 3, priority: 1, hit: false, miss: false },
				{ x: 7, y: 4, priority: 1, hit: false, miss: false },
				{ x: 7, y: 5, priority: 1, hit: false, miss: false },
				{ x: 7, y: 6, priority: 1, hit: false, miss: false },
				{ x: 7, y: 7, priority: 1, hit: false, miss: false },
				{ x: 7, y: 8, priority: 1, hit: false, miss: false },
				{ x: 7, y: 9, priority: 1, hit: false, miss: false },
				{ x: 8, y: 0, priority: 1, hit: false, miss: false },
				{ x: 8, y: 1, priority: 1, hit: false, miss: false },
				{ x: 8, y: 2, priority: 1, hit: false, miss: false },
				{ x: 8, y: 3, priority: 1, hit: false, miss: false },
				{ x: 8, y: 4, priority: 1, hit: false, miss: false },
				{ x: 8, y: 5, priority: 1, hit: false, miss: false },
				{ x: 8, y: 6, priority: 1, hit: false, miss: false },
				{ x: 8, y: 7, priority: 1, hit: false, miss: false },
				{ x: 8, y: 8, priority: 1, hit: false, miss: false },
				{ x: 8, y: 9, priority: 1, hit: false, miss: false },
				{ x: 9, y: 0, priority: 1, hit: false, miss: false },
				{ x: 9, y: 1, priority: 1, hit: false, miss: false },
				{ x: 9, y: 2, priority: 1, hit: false, miss: false },
				{ x: 9, y: 3, priority: 1, hit: false, miss: false },
				{ x: 9, y: 4, priority: 1, hit: false, miss: false },
				{ x: 9, y: 5, priority: 1, hit: false, miss: false },
				{ x: 9, y: 6, priority: 1, hit: false, miss: false },
				{ x: 9, y: 7, priority: 1, hit: false, miss: false },
				{ x: 9, y: 8, priority: 1, hit: false, miss: false },
				{ x: 9, y: 9, priority: 1, hit: false, miss: false }
			]
		};
	}

	returnStartingGridData = () => {
		let startingGridData = new Array(10);
		for (var i = 0; i < startingGridData.length; i++) {
			startingGridData[i] = new Array(10);
		}
		for (let y = 0; y < 10; y++) {
			for (let x = 0; x < 10; x++) {
				startingGridData[x][y] = {
					containsShip: false,
					isShot: false,
					shipId: ''
				};
			}
		}
		return startingGridData;
	};

	testIncomingShot = () => {
		const randomX = Math.round(Math.random() * 9);
		const randomY = Math.round(Math.random() * 9);
		const testData = { x: randomX, y: randomY };
		this.handleHit(testData);
	};

	handleHit = incomingShotObject => {
		// Save their attempts?
		console.log('handle hit', incomingShotObject);
		//  object = { x: 0, y: 2 }
		const { x, y } = incomingShotObject;
		let cellHit = this.state.gridData[x][y];
		let shipId = cellHit.shipId;
		var response = '';
		var newHitsLeft = 10;

		if (cellHit.containsShip) {
			newHitsLeft = this.state.shipRemainingHits[shipId] - 1;
			// Sunk or Hit
			response = newHitsLeft === 0 ? 'S' : 'H';
		} else {
			// Miss
			response = 'M';
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

		this.displayShotEffect(x, y);
		this.checkIfWeLost();
		return response;
	};

	displayShotEffect = (x, y) => {
		const cellId = '#cell' + x + '' + y;
		TweenMax.to(cellId, 0.3, {
			zIndex: 10,
			borderRadius: '50%',
			scale: 1.4,
			yoyo: true,
			repeat: 1
		});
	};

	checkIfWeLost = () => {
		const { shipRemainingHits } = this.state;
		let weLost = true;
		Object.entries(shipRemainingHits).forEach(([shipId, value]) => {
			if (value > 0) {
				weLost = false;
			}
		});
		console.log('We got hit! Have we lost:', weLost);
		this.setState({ weLost: weLost });
	};

	// handleFirePressed = () => {
	// 	fire(newShots => {
	// 		this.updateShotHistory(newShots);
	// 	}, this.state.ourShotHistory);
	// };

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
			updatedGridData[cell.y][cell.x] = cell;
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

	// Select target
	selectTarget = () => {
		// Find highest priority value of across all targets
		const priority = Math.max.apply(Math, this.state.targets.map(target => target.priority));
		// Select highest priority targets
		const priorityTargets = _.filter(this.state.targets, { priority: priority });
		// Select specific target at random
		const target = priorityTargets[Math.floor(Math.random() * priorityTargets.length)];
		return target;
	};

	shotWasMiss = shot => {
		this.setState(state => {
			const targets = state.targets.map(target => {
				if (target.x === shot.x && target.y === shot.y) {
					target.miss = true;
					target.priority = 0;
					return target;
				} else {
					return target;
				}
			});
			return targets;
		});
	};

	shotWasHit = shot => {
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
					((target.x === shot.x + 1 && target.y === shot.y) ||
						(target.x === shot.x - 1 && target.y === shot.y) ||
						(target.x === shot.x && target.y === shot.y + 1) ||
						(target.x === shot.x && target.y === shot.y - 1))
				) {
					target.priority = 25;
					return target;
				} else {
					return target;
				}
			});
			return targets;
		});
	};

	shotWasSunk = shot => {
		// Res
	};

	handleFireResponse = res => {
		// TODO: do something with the response
		const shot = res;

		switch (shot.outcome) {
			case 'hit':
				this.shotWasHit(shot);
				break;
			case 'miss':
				this.shotWasMiss(shot);
				break;
			default:
				console.log('shot disapeared through a worm hole');
		}
	};

	fire = () => {
		const target = this.selectTarget();
		// this.handleFireResponse(target);
		console.log('fire target:', target);
		return target;
	};

	render() {
		// Empty
		// Missed
		// Ship
		// Ship Hit

		const { gridData, weLost } = this.state;

		let cells = gridData.map((row, rowIndex) => {
			return row.map((cell, colIndex) => {
				// console.log(colIndex + "" + rowIndex);
				return (
					<div
						id={'cell' + rowIndex + '' + colIndex}
						className={style.cell}
						style={{
							backgroundColor: cell.containsShip
								? cell.isShot
									? 'red'
									: 'grey'
								: cell.isShot
								? 'white'
								: 'blue'
						}}
					/>
				);
			});
		});

		return (
			<main className={style.main}>
				<h1>{weLost ? 'GAME OVER - We Lost' : 'RedSprite Battleships'}</h1>

				<div style={{ opacity: weLost ? 0.2 : 1 }} className={style.grid1}>
					{cells}
				</div>

				<div className={style.controls}>
					<button onClick={this.placeOurShips}>PLACE SHIPS</button>
					{weLost && <button onClick={this.resetBoard}>RESET</button>}
					{/* <button onClick={this.handleFirePressed}>BEGIN SHOOTING</button>
					<button onClick={this.testIncomingShot}>TEST INCOMING SHOT</button> */}
				</div>
				{/* <Gun /> */}
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

import axios from 'axios';

const host = 'http://192.168.43.207:5000/rsbs/v1';

// shoot(x, y, callback)
// calls strike({x, y})

export class protocol {
	constructor(hitCB, shootCB) {
		this.hitCB = hitCB;
		this.shootCB = shootCB;
		// this.pollStatus();
		console.log('constructor');
		setInterval(() => this.pollStatus(), 2000);
	}

	pollStatus = () => {
		console.log('poll status');
		axios
			.get(host + '/status/?source=blue')
			.then(response => {
				switch (response.data.status) {
					case 'P':
						console.log('status Pending');
						// Pending - nothing to do
						break;
					case 'T':
						console.log('status Targetted');

						const status = this.hitCB(cord2xy(response.data.cell));
						console.log('hit cb status', status);
						axios.post(host + '/status/', {
							source: 'blue',
							status: status,
							cell: response.data.cell
						});

						break;
					default:
						console.log('status Attack');
						const shotLocation = this.shootCB();
						console.log('shotLocation:', shotLocation);
						const cords = xy2Cord(shotLocation.y, shotLocation.x);

						axios.post(host + '/target/', {
							source: 'blue',
							cell: cords
						});

						break;
				}
				console.log(response);
			})
			.catch(function(error) {
				// handle error
				console.log(error);
			});
	};
}

function xy2Cord(y, x) {
	console.log('xy2Cord', String.fromCharCode(y + 65) + (x + 1));
	return String.fromCharCode(y + 65) + (x + 1);
}

function cord2xy(cord) {
	const xY = {
		x: cord.substr(1) - 1,
		y: cord.charCodeAt(0) - 65
	};
	console.log(xY);
	return xY;
}

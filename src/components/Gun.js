import React, { Component } from 'react';
import _ from 'lodash';

export default class Gun extends Component {
	render() {
		return (
			<div>
				<button onClick={this.fire}>Fire Test Shot</button>
			</div>
		);
	}
}

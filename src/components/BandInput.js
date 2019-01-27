// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
	state = {
		name: ''
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addNewBand(this.state)
		this.setState({ name: '' })
	}

	render() {
		return (
			<div>
				<form onSubmit={event => this.handleSubmit(event)}>
					<label>Cr8 ur b@nd: </label>
					<input
						type="text"
						value={this.state.name}
						onChange={event => this.setState({ name: event.target.value })}
					/>
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default BandInput

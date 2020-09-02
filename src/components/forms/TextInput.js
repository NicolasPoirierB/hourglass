
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TEXTAREA_TYPE = 'TEXTAREA';
export const TEXTINPUT_TYPE = 'TEXTINPUT';

//#region styles
const TextFieldset = styled.fieldset`
`;
//endregion

export default class TextField extends Component {
	static propTypes = {
		name: PropTypes.string,
		value: PropTypes.string,
		type: PropTypes.string,
		placeholder: PropTypes.string,
		can_edit: PropTypes.bool,
		validate: PropTypes.func,
		onChange: PropTypes.func,
		onKeyPress: PropTypes.func,
		onFocus: PropTypes.func,
		onBlur: PropTypes.func,
		maxlength: PropTypes.number,
	};

	static defaultProps = {
		onFocus: () => {},
		onBlur: () => {},
		onChange: () => {},
		onKeyPress: () => {},
		validate: () => {
			return { valid: true, message: '' };
		},
		can_edit: true,
		maxlength: 9999,
	}

	constructor(props) {
		super(props);
		this.state = {
			error: false,
		};
	}

	onChange = () => {
		if (this.props.can_edit) {
			const prop = {};
			prop[this.props.name] = this.input.value;

			const validation = this.props.validate(this.input.value);
			
			if (validation.valid) {
				this.setState({
					error: false,
				});
				this.props.onChange(prop);
			} else {
				this.setState({
					error: true,
				});
			}
		}
	}

	onFocus = () => {
		this.props.onFocus();
	}

	onBlur = () => {
		this.props.onBlur();
	}

	getInput() {
		return (
			<input 
				type="text" 
				name={this.props.name} 
				id={this.props.name} 
				value={this.props.value} 
				ref={el => this.input = el}  
				onChange={this.onChange} 
				onKeyPress={this.props.onKeyPress}
				onFocus={this.onFocus}
				onBlur={this.onBlur}
				placeholder={this.props.placeholder}
				maxLength={this.props.maxlength}
			/>
		);
		
	}

	render() {
		const input = this.getInput();
		const errorClass = this.state.error ? 'error' : '';
		//const errorMessage = this.state.error ? (<div className="error-msg">{this.state.errorMessage}</div>) : null;

		return (
			<TextFieldset className={`${this.props.type} ${errorClass}`}>
				{input}
			</TextFieldset>
		);
	}
}

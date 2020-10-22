
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ButtonElem = styled.button``;

export default class Button extends Component {
	static propTypes = {
		children: PropTypes.any,
		classes: PropTypes.string,
		to: PropTypes.string,
	};

	static defaultProps = {
		classes: 'btn-primary',
	};

	render() {
		const Elem = this.props.to ? Link : ButtonElem;
		return (
			<Elem className={`btn ${this.props.classes}`} {...this.props}>{this.props.children}</Elem>
		)
	}
}

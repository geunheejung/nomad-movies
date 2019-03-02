import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GREY_COLOR } from '../constatns/Color';

const OverviewText = styled.Text`
	color: ${props => props.color};
	font-size: ${props => props.fontSize};
`;

const Overview = ({ color, fontSize, overview, maxLength }) => overview ? (
	<OverviewText
		color={color}
		fontSize={fontSize}
	>
		{
			overview.length > maxLength ?
				`${overview.substring(0, maxLength - 3)}...` :
				overview
		}
	</OverviewText>
) : null;

Overview.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string,
	overview: PropTypes.string,
	maxLength: PropTypes.number
};

Overview.defaultProps = {
	maxLength: 117,
	color: GREY_COLOR,
	fontSize: "12px",
	overview: '',
};

export default Overview;

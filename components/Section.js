import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.View`
	margin-vertical: 20px;
`;

const ScrollView = styled.ScrollView`
	padding-left: 20px;
`;

const Title = styled.Text`
	margin-bottom: 15px;
	padding-left: 20px;
	color: #fff;
	font-weight: 600;		
`;

const Section = ({ title, horizontal, children }) => (
	<Container>
		<Title>{title}</Title>
		<ScrollView horizontal={horizontal}>{children}</ScrollView>
	</Container>
);

Section.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	title: PropTypes.string.isRequired,
	horizontal: PropTypes.bool,
}

Section.defaultProps = {
	horizontal: true,
}

export default Section;

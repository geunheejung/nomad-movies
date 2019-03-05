import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import { TINT_COLOR } from '../constatns/Color';
import Section from './Section';

const NotFoundContainer = styled.View`
  margin-left: 20px;
`;

const NotFound = styled.Text`  
  color: ${TINT_COLOR};
  font-weight: 600;
`;

const NotFoundSection = ({
	title,
	results,
	renderResults,
}) => {
	if (!results) return null;

	return (
		<Section title={title}>
			{
				_isEmpty(results) ? (
					<NotFoundContainer>
						<NotFound>
							No Results...🤯🤯
						</NotFound>
					</NotFoundContainer>
				) : renderResults(results)
			}
		</Section>
	);
}

export default NotFoundSection;

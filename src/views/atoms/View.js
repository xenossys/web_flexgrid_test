import React from 'react';
import styled from 'styled-components';

const View = ({
	style,
	children,
	ref,
	tabletStyle,
	mobileStyle,
}) => {
	const converImportantSt = style => {
		const newStyle = {};
		for (const key in style) {
			newStyle[key] = `${style[key]} !important`;
		}
		return newStyle;
	};
	return (
		<Container
			ref={ref}
			style={style}
			tabletStyle={converImportantSt(tabletStyle)}
			mobileStyle={converImportantSt(mobileStyle)}
		>
			{children}
		</Container>
	);
};

export default View;

const Container = styled.span`
	display: flex;
	flex-direction: column;
	${props => props.style};

	@media (max-width: 1024px) {
		${props => props.tabletStyle};
	}
	@media (max-width: 768px) {
		${props => props.mobileStyle}
	}
`;

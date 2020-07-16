import React from 'react';
import View from '../atoms/View';

const ContentsArea = ({
	children,
	ref,
	style,
}) => {
	return (
		<View
			ref={ref}
			style={Object.assign(
				styles.container,
				style,
			)}
			mobileStyle={null}
			tabletStyle={styles.tabletStyle}
		>
			{children}
		</View>
	);
};

export default ContentsArea;

const styles = {
	container: {
		width: 'calc(100vw - 280px)',
		height: 'calc(100vh - 170px)',
		marginTop: 80,
		position: 'absolute',
		overflow: 'auto',
		float: 'right',
		overflowScrolling: 'touch',
		// paddingTop: 180,
	},
	tabletStyle: {
		width: '100vw',
	},
};

import React from 'react';
import View from 'views/atoms/View';
import { Fonts } from 'styles';

const Navibar = () => {
	return (
		<View style={styles.container}>
			<View style={styles.pageName}>
				Web Example
			</View>
		</View>
	);
};

export default Navibar;

const styles = {
	container: {
		background: '#f29300',
		height: 100,
		width: '100vw',
		justifyContent: 'center',
		alignItems: 'flex-start',
		// paddingLeft: 30,
	},
	pageName: {
		marginLeft: 30,
		fontFamily: Fonts.subBold,
		fontSize: 25,
		color: 'white',
	},
};

import React from 'react';
import View from '../atoms/View';

function App() {
	return (
		<View style={styles.container}>
			초기 setting kit(Dashboard)
		</View>
	);
}

export default App;

const styles = {
	container: {
		height: 2000,
		background: 'white',
		padding: 20,
	},
};

import React from 'react';
import View from 'views/atoms/View';
import { Fonts } from 'styles';

const PageHeader = ({ option, routes }) => {
	const whatText = () => {
		let name;
		let subName;
		routes.map(prop => {
			if (
				window.location.href.indexOf(
					prop.layout + prop.path,
				) !== -1
			) {
				name = prop.name;
				subName = prop.subName;
			}
			return null;
		});

		if (name && subName)
			return (
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.titleText}>
						{name}
					</View>
					<View style={styles.subText}>
						{` : ${subName}`}
					</View>
				</View>
			);
		else if (name && !subName)
			return (
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.titleText}>
						{name}
					</View>
				</View>
			);
		else return 'undefined Title';
	};
	return (
		<View style={styles.container}>
			<View style={styles.title}>
				{whatText()}
			</View>
			{option ? (
				<View style={styles.option}>
					{option}
				</View>
			) : (
				<></>
			)}
		</View>
	);
};

export default PageHeader;

const styles = {
	container: {
		flexDirection: 'row',
		width: '100%',
		height: 80,
		background: 'white',
		borderBottom: '1px solid #BCB8B8',
		borderTop: '1px solid #BCB8B8',
		boxShadow: '1px 1px 0px 0px #BCB8B8',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1,
	},
	title: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: 30,
	},
	option: {
		width: 300,
		height: '100%',
		borderLeft: '1px solid #BCB8B8',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		fontFamily: Fonts.subBold,
		color: '#D79300',
		fontSize: 20,
	},
	subText: {
		fontFamily: Fonts.sub,
		marginLeft: 10,
		color: '#969696',
		fontSize: 20,
	},
};

import React from 'react';
import View from 'views/atoms/View';
import { NavLink } from 'react-router-dom';
import { Fonts } from '../../styles';

const SideBar = ({ routes }) => {
	function activeRoute(routeName) {
		return window.location.href.indexOf(
			routeName,
		) > -1
			? true
			: false;
	}
	return (
		<View
			tabletStyle={styles.tabletStyle}
			style={styles.container}
		>
			{routes.map((item, index) => {
				return (
					<NavLink
						to={item.layout + item.path}
						key={index}
						exact={true}
						style={{ textDecoration: 'none' }}
					>
						<View
							style={
								activeRoute(
									item.layout + item.path,
								)
									? styles.activeButton
									: styles.button
							}
						>
							<View
								style={
									activeRoute(
										item.layout + item.path,
									)
										? styles.activeIcon
										: styles.icon
								}
							></View>
							<View
								style={
									activeRoute(
										item.layout + item.path,
									)
										? styles.activeTitle
										: styles.title
								}
							>
								{item.name}
							</View>
						</View>
					</NavLink>
				);
			})}
		</View>
	);
};

export default SideBar;

const styles = {
	container: {
		height: 'cal(100vh-100px)',
		width: 280,
		background: '#333245',
		paddingTop: 25,
		overflow: 'hidden',
	},
	tabletStyle: {
		display: 'none',
	},
	button: {
		flexDirection: 'row',
		width: '100%',
		height: 85,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingLeft: 40,
		textDecoration: 'none',
	},
	activeButton: {
		flexDirection: 'row',
		width: '100%',
		height: 85,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingLeft: 40,
		background: '#2B2B3D',
		borderLeft: '4px solid #F29300',
		textDecoration: 'none',
	},
	icon: {
		width: 30,
		height: 30,
		borderRadius: 15,
		border: '2px solid #686867',
		marginRight: 20,
	},
	activeIcon: {
		width: 30,
		height: 30,
		borderRadius: 15,
		border: '2px solid white',
		marginRight: 20,
	},
	title: {
		fontFamily: Fonts.sub,
		fontSize: 20,
		color: '#686867',
		borderBottom: false,
	},
	activeTitle: {
		fontFamily: Fonts.sub,
		fontSize: 20,
		color: 'white',
		borderBottom: false,
	},
};

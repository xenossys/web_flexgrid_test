import React, {
	useEffect,
	createRef,
	useState,
} from 'react';
import {
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// core components
import routes from 'module/router';
import {
	SideBar,
	Navibar,
} from 'views/templates';

import View from 'views/atoms/View';
import PageHeader from '../templates/PageHeader';
import ContentsArea from '../templates/ContentsArea';
import Footer from '../templates/Footer';
let ps;

const switchRoutes = (
	<Switch>
		{routes.map((prop, key) => {
			if (prop.layout === '/home') {
				return (
					<Route
						path={prop.layout + prop.path}
						component={prop.component}
						key={key}
					/>
				);
			}
			return null;
		})}
		<Redirect from="/home" to="/home/app" />
	</Switch>
);

export default function Setting({ ...rest }) {
	const mainPanel = createRef();

	const [
		mobileOpen,
		setMobileOpen,
	] = React.useState(false);

	console.log({ ...rest });

	useEffect(() => {
		if (navigator.platform.indexOf('Win') > -1) {
			ps = new PerfectScrollbar(
				mainPanel.current,
				{
					suppressScrollX: true,
					suppressScrollY: false,
				},
			);
			document.body.style.overflow = 'hidden';
		}
		window.addEventListener(
			'resize',
			resizeFunction,
		);
		return function cleanup() {
			if (
				navigator.platform.indexOf('Win') > -1
			) {
				ps.destroy();
			}
			window.removeEventListener(
				'resize',
				resizeFunction,
			);
		};
	}, [mainPanel]);

	const resizeFunction = () => {
		if (window.innerWidth >= 960) {
			setMobileOpen(false);
		}
	};

	return (
		<View style={styles.container}>
			<Navibar {...rest} />
			<View style={styles.rowStyle}>
				<SideBar routes={routes}></SideBar>
				<View style={styles.mainContants}>
					<PageHeader routes={routes} />
					<ContentsArea ref={mainPanel}>
						<div>{switchRoutes}</div>
						<Footer></Footer>
					</ContentsArea>
				</View>
			</View>
		</View>
	);
}

const styles = {
	container: {
		flex: 1,
		width: '100%',
		height: '100vh',
		position: 'absolute',
		overflow: 'hidden',
	},
	rowStyle: {
		flexDirection: 'row',
		width: '100%',
		height: '100%',
	},
	mainContants: {
		flex: 1,
		height: '100%',
		flexDirection: 'column',
	},
	contentArea: {
		padding: 20,
	},
};

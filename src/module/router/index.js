import App from 'views/pages/App';
import Users from 'views/pages/Users';
import FontExample from '../../views/pages/FontExample';
import Menu02 from '../../views/pages/Menu02';

const router = [
	{
		path: '/app',
		name: 'DASHBOARD',
		subName: 'Example sub-name',
		icon: null,
		component: App,
		layout: '/home',
		isSideBar: true,
		mode: 'dev',
	},
	{
		path: '/menu01',
		name: 'MENU01',
		subName: null,
		icon: null,
		component: Users,
		layout: '/home',
		isSideBar: true,
		mode: 'dev',
	},
	{
		path: '/menu2',
		name: 'MENU02',
		subName: null,
		icon: null,
		component: Menu02,
		layout: '/home',
		isSideBar: true,
		mode: 'dev',
	},
	{
		path: '/fonts',
		name: 'FONTS for Dev',
		subName: null,
		icon: null,
		component: FontExample,
		layout: '/home',
		isSideBar: true,
		mode: 'dev',
	},
];

export default router;

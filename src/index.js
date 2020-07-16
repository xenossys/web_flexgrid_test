import React from 'react';
import ReactDOM from 'react-dom';
// router core
import { createBrowserHistory } from 'history';
import {
	Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
// redux core
import { Provider } from 'react-redux';

//core component
import store from 'module/redux/store';
import Setting from 'views/pages/Setting';

//default style
import GlobalStyle from 'assets/css/globalStyle';

const hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Provider store={store}>
			<GlobalStyle />
			<Switch>
				<Route path="/home" component={Setting} />
				<Redirect from="/" to="/home" />
			</Switch>
		</Provider>
	</Router>,
	document.getElementById('root'),
);

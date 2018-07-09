import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HelloWorld from './hello';
import Donate from './donate';

import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Link to="/goodbye">Goodbye</Link>
					<AuthButton />
					<Switch>
						<Route exact path="/" component={HelloWorld} />
						<Route path="/login" component={Login} />
						<Route path="/logout" component={Logout} />
						<Route path="/donate" component={Donate} />
					</Switch>
				</Fragment>
			</Router>
		);
	}
}

export default Navigation;

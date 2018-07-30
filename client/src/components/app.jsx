import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './home';
import FeaturedProductPage from './featuredproducts';
import AboutPage from './about';
import ContactPage from './contact';
// import Donate from './donate';

// import PrivateRoute from './auth/privateRoute';
// import Login from './auth/login';
// import Logout from './auth/logout';
// import AuthButton from './auth/authButton';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					{/* <AuthButton /> */}
					<Link className="btn btn-dark ml-2" to="/">
						Home
					</Link>
					<Link className="btn btn-dark ml-2" to="/featuredproducts">
						Featured Products
					</Link>
					<Link className="btn btn-dark ml-2" to="/about">
						About Us
					</Link>
					<Link className="btn btn-dark ml-2" to="/contact">
						Contact
					</Link>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/featuredproducts" component={FeaturedProductPage} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/contact" component={ContactPage} />
						{/* <Route path="/login" component={Login} />
						<Route path="/logout" component={Logout} />
						<Route path="/donate" component={Donate} /> */}
					</Switch>
				</Fragment>
			</Router>
		);
	}
}

export default Navigation;

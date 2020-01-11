import React from 'react';
import { Route } from 'react-router-dom';
import Login from './containers/Login';
import SchoolsList from './containers/SchoolsList'
import signup from './containers/signup';
import TestComponent from './containers/TestComponent';
import SchoolPage from './containers/SchoolPage'
import Logout from "./containers/logout";
import SchoolMap from "./containers/SchoolMap"

export const BASE_PATH = '/app';

const BaseRouter = () => (
	<div>
		<Route exact path={`${BASE_PATH}/schoolsMap`} component={SchoolMap} />
		<Route exact path={`${BASE_PATH}/login`} component={Login} />
		<Route exact path={`${BASE_PATH}/test`} component={TestComponent} />
		<Route exact path={`${BASE_PATH}/signup`} component={signup} />
		<Route exact path={`${BASE_PATH}/login/schoolpage`} component={SchoolPage} />
		<Route exact path={`${BASE_PATH}/logout`} component={Logout} />
		<Route exact path={`${BASE_PATH}/maps`} component={SchoolMap} />
		<Route exact path={`${BASE_PATH}`} component={SchoolsList} />

	</div>
);

export default BaseRouter;

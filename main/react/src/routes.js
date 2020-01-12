import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import SchoolsList from './containers/SchoolsList'
import signup from './containers/signup';
import TestComponent from './containers/TestComponent';
import SchoolPage from './containers/SchoolPage'
import Logout from "./containers/logout";
import SchoolMap from "./containers/SchoolMap"
import SignupContainer from "./containers/SignupContainer"

export const BASE_PATH = '/app';

const BaseRouter = () => (
	<div>
		<Route exact path={`${BASE_PATH}/schools/:schoolId`} component={SchoolPage} />
		<Route exact path={`${BASE_PATH}/schools`} component={SchoolsList} />
		<Route exact path={`${BASE_PATH}/schoolsMap`} component={SchoolMap} />
		<Route exact path={`${BASE_PATH}`} component={Home} />
		<Route exact path={`${BASE_PATH}/test`} component={TestComponent} />
		<Route exact path={`${BASE_PATH}/signup`} component={SignupContainer} />
		<Route exact path={`${BASE_PATH}/login/schoolpage`} component={SchoolPage} />
		<Route exact path={`${BASE_PATH}/logout`} component={Logout} />
		<Route exact path={`${BASE_PATH}/maps`} component={SchoolMap} />
		<Route exact path={`${BASE_PATH}/schools`} component={SchoolsList} />

	</div>
);

export default BaseRouter;

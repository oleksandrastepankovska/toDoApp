import React from 'react';
import Home from './pages/Home'
import Header from './components/Header';
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute';

import {
	BrowserRouter,
	Route
} from 'react-router-dom'

const App = () => {
	return(
		<div className="div">
			<BrowserRouter>
			<Header />
				<Route path="/login">
					<Login />
				</Route>
				<PrivateRoute path="/app">
					<Home />
				</PrivateRoute>
			</BrowserRouter>
		</div>
	)
}

export default App;

import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';

const PrivateRoute = (props) => {
	return props.login ? (
		<Route path={props.path}>
      		{props.children}
    	</Route>
	) : (
		<Redirect to="/login"/>
	)
}

const mapStateToProps = (state) => {
	return{
		login: state.auth.login
	}
}

export default connect(mapStateToProps)(PrivateRoute);
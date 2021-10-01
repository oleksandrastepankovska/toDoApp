import React from 'react';
import { HeaderWrapper, HeaderLogo } from './style'
import { connect } from 'react-redux';
import { FormButton } from '../Form/style';
import { userLogout } from '../../redux/actions/authActions';

const Header = (props) => {

	const handleClick = () => {
		localStorage.clear("token")
		props.logout()
	}

	return(
		<HeaderWrapper>
			<HeaderLogo>Your Personal ToDo List</HeaderLogo>
			{props.isLogged ? <FormButton onClick={handleClick}>LogOut</FormButton> : <p>&#9996;</p>}
		</HeaderWrapper>
	)
}

const mapStateToProps = (state) => {
	return{
		isLogged: state.auth.login
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		logout: () => dispatch(userLogout())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
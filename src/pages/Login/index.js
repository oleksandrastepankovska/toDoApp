import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { appLogin, hideError } from "../../redux/actions/authActions"
import { LoginForm, LoginText, LoginWrapper, Error } from "./style"
import { FormInput, FormButton } from "../../components/Form/style"
import { Redirect } from "react-router"

const Login = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => props.hideError() 
	// eslint-disable-next-line react-hooks/exhaustive-deps
	, [])

	const submitHandler = e => {
		e.preventDefault()

		props.loginUser({email, password})
	}

	return props.isLogged ? (
		<Redirect exact to="/app" />
	) : (
		<LoginWrapper>
			<LoginForm onSubmit={submitHandler}>
				<LoginText>Login Here</LoginText>
				<FormInput type="email" placeholder="email" value={email} onChange={ e => setEmail(e.target.value)} />
				<FormInput type="password" placeholder="password" required value={password} onChange={ e => setPassword(e.target.value)} />
				<FormButton type="submit">Submit &#128076;</FormButton>
				{props.isError && <Error>Something went wrong, please try again</Error>}
			</LoginForm>			
		</LoginWrapper>	
	)
}

const mapStateToProps = (state) => {
	return{
		isLogged: state.auth.login,
		isError: state.auth.err
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		loginUser: (obj) => dispatch(appLogin(obj)),
		hideError: () => dispatch(hideError())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
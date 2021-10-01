import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions/todoActions'

import { FormWrapper, FormInput, FormDiv, FormButton } from './style'
import { fetchTodo } from '../../redux/actions/asyncTodoActions'

const Form = (props) => {
	const [value, setValue] = useState('')

	const submitHandler = event => {
		event.preventDefault()

		if(value.trim().length === 0){
			alert('Write Something')
			setValue('')
		} else if(value.trim().length > 70){
			alert('You To Do is too long')
			setValue('')
		} else {
			props.addTodo({
				title: value,
				id: Date.now(),
				completed: false
			})
			setValue('')
		}
	}

	const clickHandler = () => {
		props.addAsyncTodo()
	}

	return(
		<FormDiv>
			<FormWrapper onSubmit={submitHandler}>
			<FormInput 
				type={props.type}
				placeholder="Type Your To Do &#128522;"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<FormButton>Add Todo</FormButton>
		</FormWrapper>
		<FormButton onClick={clickHandler}>Async &#8987;</FormButton>
	</FormDiv>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		addAsyncTodo: (obj) => dispatch(fetchTodo(obj)),
		addTodo: (obj) => dispatch(addTodo(obj))
	}
}

export default connect(null, mapDispatchToProps)(Form);
import * as actionTypes from './actionTypes/todoTypes'

export const addTodo = ({id, title, completed}) => {
	return {
		type: actionTypes.ADD_TODO,
		payload: {
			title,
			id,
			completed
		}
	}
}

export const toggleTodo = (id, completed) => {
	return {
		type: actionTypes.TOGGLE_TODO,
		payload: id, completed
	}
}

export const deleteTodo = (id) => {
	return {
		type: actionTypes.DELETE_TODO,
		payload: id
	}
}

export const addAsyncTodo = todo => {
	return {
		type: actionTypes.ADD_ASYNC_TODO,
		payload: {
			...todo
		}
	}
}

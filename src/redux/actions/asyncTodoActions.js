import { addAsyncTodo } from "./todoActions"

export const fetchTodo = () => {
	return (dispatch) => {
		fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 200) + 1}`)
			.then(response => response.json())
			.then(json => dispatch(addAsyncTodo(json)))
	}
}

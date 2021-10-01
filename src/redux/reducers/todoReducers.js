
const initialState = {
	todos: [],
	loading: false,
	error: null
};

const todoReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_TODO': {
			return {
				...state,
				todos: [...state.todos, action.payload]
			}
		}
			
		case 'TOGGLE_TODO': {
			const index = state.todos.findIndex(item => item.id === action.payload.id)
			state.todos[index].completed = action.payload.completed
			return {
				...state,
				todos: [...state.todos]
			}
		}
			
		case 'DELETE_TODO': {
			return{
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload.id)
			}
		}

		case 'ADD_ASYNC_TODO':
			return {
				...state,
				todos: [...state.todos, action.payload]
			};
			
		default:
			return state
	}
}

export default todoReducer;
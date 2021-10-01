import { connect } from 'react-redux'
import SingleNote from './SingleNote';
import { NotesList, NoTodosComponent } from './style'

const Notes = (props) => {
	if(!props.todos || !props.todos.length) {
		return <NoTodosComponent>No Todo's Yet &#128585;</NoTodosComponent>
	}

	return(
		<NotesList>
			{props.todos.map((item) => (
				<SingleNote key={item.id} id={item.id} title={item.title} completed={item.completed} />
			))}
		</NotesList>
	)
}

const mapStateToProps = (state) => {
	return {
		todos: state.app.todos
	}
}

export default connect(mapStateToProps)(Notes);
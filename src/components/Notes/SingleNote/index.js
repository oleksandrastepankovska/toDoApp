import { NoteItem, DeleteButton } from './style'
import { connect } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../../redux/actions/todoActions'


const SingleNote = (props) => {

	const handleComplete = () => {
		props.toggleTodo({
			id: props.id,
			completed: !props.completed
		})
	}

	const handleDelete = () => {
		props.deleteTodo({id:props.id})
	}

	return(
		<NoteItem key={props.id}>
			<div>
				<input 
					type='checkbox' 
					checked={props.completed}
					onChange={handleComplete}
					className='checkbox'
				/>
				<p>{props.title}</p>
			</div>
			<DeleteButton onClick={handleDelete} type="DeleteButton">&#10060;</DeleteButton>	
		</NoteItem>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleTodo: (obj) => dispatch(toggleTodo(obj)),
		deleteTodo: (obj) => dispatch(deleteTodo(obj))
	}
}

export default connect(null, mapDispatchToProps)(SingleNote);
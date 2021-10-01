import styled from 'styled-components'

export const NoteItem = styled.li`
	margin-bottom: 10px;
	width: 71%;
	display: flex;
	justify-content: space-between;
	padding: 10px;
	color: #383F50;
	border-bottom: 1px solid #E5E5E5;

	div{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	input{
		margin-right: 10px;
		
		:checked + p{
			text-decoration: red line-through;
		}
	}


`;

export const DeleteButton = styled.button`
	border: none;
	background-color: #FFFFFF;
	cursor: pointer;
	transition: transform .7s ease-in-out;

	:hover{
		transform: rotate(360deg);
	}
`;
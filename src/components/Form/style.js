import styled from 'styled-components'

export const FormDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40%;
`;

export const FormWrapper = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const FormInput = styled.input`
	width: 100%;
	height: 30px;
	font-size: 16px;
  	padding: 10px;
	border: none;
	background-color: #F4F6FA;
  	border-radius: 3px;
	
	::placeholder {
    	color: #B2B7BB;
  	}
`;

export const FormButton = styled.button`
	width: 15%;
	height: 50px;
	border: none;
	border-radius: 3px;
	font-size: 14px;
	font-weight: 600;
	margin: 5px;
	background-color: #F4F6FA;
	color: #383F50;
	transition: .5s;

	:hover{
		color: #F4F6FA;
		background-color: #383F50;
	}
`;

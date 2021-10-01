import styled from 'styled-components'

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 20%;
	align-items: center;

	input{
		margin-top: 10px;
	}

	button{
		width: 106%;
		font-size: 17px;
	}
`;

export const LoginText = styled.p`
	font-size: 46px;
	font-style: normal;
	font-weight: 700;
	line-height: 70px;
	letter-spacing: 0em;
	color: #383F50;
`;

export const LoginWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const Error = styled.p`
	font-size: 18px;
	letter-spacing: 0em;
	font-weight: 700;
	color: #383F50;
`;

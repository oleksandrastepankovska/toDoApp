import React from 'react';
import Form from '../../components/Form';
import Notes from '../../components/Notes/index'
import { HomeWrapper } from './style';

const Home = () => {
	return(
		<HomeWrapper>
			<Form />
			<Notes />
		</HomeWrapper>
	)
}

export default Home;
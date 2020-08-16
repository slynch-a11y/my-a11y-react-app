import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../components/content';

function Home() {
	return (
		<div>
			<Helmet>
				<title>Home | A11y React App</title>
			</Helmet>
			<h1>Home</h1>
			<Content />
		</div>
	);
}

export default Home;

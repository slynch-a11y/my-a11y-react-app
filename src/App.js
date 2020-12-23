import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import { Helmet } from 'react-helmet';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Layout from './layouts/default-layout';

export default function App() {
	return (
		<div>
			<Helmet>
				<meta charset="UTF-8" />
				<meta name="description" content="My Accessible React App" />
				<meta name="keywords" content="accessibility" />
				<meta name="author" content="John Doe" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Helmet>
			<Layout>
				<Router>
					<About path="/about" />
					<Contact path="/contact-us" />
					<Home path="/" />
				</Router>
			</Layout>
		</div>
	);
}

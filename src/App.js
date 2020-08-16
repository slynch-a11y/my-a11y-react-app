import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

export default function App() {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: '20% auto' }}>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact-us">Contact Us</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div>
				<Router>
					<About path="/about" />
					<Contact path="/contact-us" />
					<Home path="/" />
				</Router>
			</div>
		</div>
	);
}

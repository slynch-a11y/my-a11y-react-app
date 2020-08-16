import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import { Helmet } from 'react-helmet';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

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
			<div className="bg-yale">
				<div className="container pt-5" style={{ minHeight: '700px' }}>
					<div className="row">
						<header className="col-3">
							A11y React App
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
						</header>

						<main className="col">
							<Router>
								<About path="/about" />
								<Contact path="/contact-us" />
								<Home path="/" />
							</Router>
						</main>
					</div>
				</div>
			</div>
			<footer className="container">Here is my footer</footer>
		</div>
	);
}

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function About() {
	const [ count, setCount ] = useState(null);

	return (
		<div>
			<Helmet>
				<title>About | A11y React App</title>
			</Helmet>
			<h1>About</h1>
			<div className="row">
				<div className="col-3">
					<button className="mt-5" onClick={() => setCount(count + 1)}>
						Click me
					</button>
				</div>
				<div className="col mt-3 display-1">
					<div aria-live="polite">{count}</div>
				</div>
			</div>
		</div>
	);
}

export default About;

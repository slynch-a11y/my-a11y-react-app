import React, { useEffect } from 'react';

function About() {
	useEffect(() => {
		// Update the document title using the browser API
		document.title = 'About Page';
	});
	return <h2>About</h2>;
}

export default About;
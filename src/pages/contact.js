import React from 'react';
import { Helmet } from 'react-helmet';
import TableData from '../components/table-data';

function Contact() {
	return (
		<div>
			<Helmet>
				<title>Contact Us | A11y React App</title>
			</Helmet>
			<h1>Contact Us</h1>
			<table>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Phone</th>
				</tr>
				<tr>
					<TableData />
				</tr>
			</table>
		</div>
	);
}

export default Contact;

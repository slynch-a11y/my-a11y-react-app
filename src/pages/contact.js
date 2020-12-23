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
				<tbody>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
					</tr>
					<tr>
						<TableData />
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Contact;

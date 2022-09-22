import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

//import components
import Layout from '../components/Layout';

function Index() {
	const [list, setList] = useState([]);

	useEffect(() => {
		const apiURL = 'https://www.zesty.io/-/gql/platform_section.json';
		fetch(apiURL)
			.then((data) => data.json())
			.then((items) => {
				setList(items);
			});
	}, []);

	function createMarkup(data) {
		return { __html: data };
	}

	return (
		<Layout>
			{list.map((data, index) => {
				return (
					<Card key={index} sx={{ marginBottom: 5 }}>
						<CardContent>
							<Typography variant='h4' component='h1'>
								{data.title}
							</Typography>
							<div dangerouslySetInnerHTML={createMarkup(data.text_content)} />
						</CardContent>
					</Card>
				);
			})}
		</Layout>
	);
}

export default Index;

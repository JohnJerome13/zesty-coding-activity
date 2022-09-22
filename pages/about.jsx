import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

//import components
import Layout from '../components/Layout';

function Index() {
	const [about, setAbout] = useState([]);
	var aboutData;

	useEffect(() => {
		const apiURL = 'https://www.zesty.io/-/instant/7-e93178-vqvclg.json';
		fetch(apiURL)
			.then((data) => data.json())
			.then((items) => {
				setAbout(items);
			});
	}, []);

	function createMarkup(data) {
		return { __html: data };
	}

	aboutData = Array.isArray(about.data) && about.data[0].content.page_content;

	return (
		<Layout>
			<Typography variant='h4' component='h1'>
				About Zesty.io
			</Typography>

			<div dangerouslySetInnerHTML={createMarkup(aboutData)} />
		</Layout>
	);
}

export default Index;

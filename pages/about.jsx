import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { fadeInRight, fadeInLeft, fadeInLeftSlow } from '../config/animations';

//import components
import Layout from '../components/Layout';
import Logo from '../components/Logo';

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

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

	const splitParagraph = (p, start, deleteCount) => {
		var paragraph;
		if (p) {
			paragraph = (
				p.split('</p>').splice(start, deleteCount).join('</p>') + '</p>'
			).replace(/\<\/p> *\<\/p>/g, '</p>');
		}

		return paragraph;
	};

	return (
		<Layout>
			<Head>
				<title>About Zesty.io</title>
			</Head>
			<Grid
				justifyContent='center'
				alignItems='center'
				container
				spacing={5}
				sx={{ py: 3 }}
			>
				<Grid item md={6} sx={{ display: { sm: 'block', md: 'none' } }}>
					<Logo sx={{ width: 200 }} />
				</Grid>
				<MotionGrid
					initial='offscreen'
					whileInView='onscreen'
					variants={fadeInLeft}
					item
					md={6}
				>
					<Typography variant='h4' component='h1'>
						About Zesty.io
					</Typography>
					<Box
						dangerouslySetInnerHTML={createMarkup(
							splitParagraph(aboutData, 0, 4)
						)}
					/>
				</MotionGrid>
				<MotionGrid
					initial='offscreen'
					whileInView='onscreen'
					variants={fadeInRight}
					item
					md={6}
					sx={{ display: { xs: 'none', md: 'block' } }}
				>
					<Logo sx={{ px: 5 }} />
				</MotionGrid>
			</Grid>

			<Grid
				justifyContent='center'
				alignItems='center'
				container
				spacing={5}
				sx={{ py: 3 }}
			>
				<MotionGrid
					initial='offscreen'
					whileInView='onscreen'
					variants={fadeInLeft}
					item
					md={6}
				>
					<Box
						component='img'
						alt='Zesty.io'
						src='/Zestyio-Working-Photo.jpg'
						sx={{ width: '100%' }}
					/>
				</MotionGrid>
				<MotionGrid
					initial='offscreen'
					whileInView='onscreen'
					variants={fadeInRight}
					item
					md={6}
				>
					<MotionBox
						initial='offscreen'
						whileInView='onscreen'
						variants={fadeInLeftSlow}
						className='paragraphLine'
						dangerouslySetInnerHTML={createMarkup(
							splitParagraph(aboutData, 4, 1)
						)}
					/>
					<Box
						dangerouslySetInnerHTML={createMarkup(
							splitParagraph(aboutData, 6, 3)
						)}
						sx={{ pt: 2 }}
					/>
				</MotionGrid>
			</Grid>
		</Layout>
	);
}

export default Index;

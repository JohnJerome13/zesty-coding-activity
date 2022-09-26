import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '../config/animations';

//import components
import Layout from '../components/Layout';
import MainFeatured from '../components/MainFeatured';

const MotionBox = motion(Box);

const mainFeaturedPost = {
	title: 'Visual content management',
	description: 'for any digital channel',
	image: './zesty-manager-black-and-white.BJ7n6BCnl.jpg',
	imageText: 'main image description',
};

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
			<Head>
				<title>Zesty.io: Simplify digital. Maximize results.</title>
			</Head>
			<Box
				sx={{
					py: 3,
				}}
			>
				<MainFeatured post={mainFeaturedPost} />
			</Box>
			<MotionBox
				initial='offscreen'
				whileInView='onscreen'
				variants={fadeIn}
				sx={{
					pb: 6,
					textAlign: 'center',
				}}
			>
				<Typography
					variant='h4'
					sx={{
						textTransform: 'capitalize',
					}}
					gutterBottom
				>
					Our Platforms
				</Typography>
				<Box
					sx={{
						borderBottom: 'solid 5px rgb(255, 93, 10)',
						width: '5%',
						margin: 'auto',
						mt: 2,
					}}
				/>
			</MotionBox>
			{list.map((data, index) => {
				return (
					<MotionBox
						initial='offscreen'
						whileInView='onscreen'
						variants={fadeInUp}
					>
						<Card
							key={index}
							sx={{ marginBottom: 5, borderLeft: 'solid 5px rgb(255, 93, 10)' }}
						>
							<CardContent>
								<Typography variant='h4' component='h1'>
									{data.title}
								</Typography>
								<div
									dangerouslySetInnerHTML={createMarkup(data.text_content)}
								/>
							</CardContent>
						</Card>
					</MotionBox>
				);
			})}
		</Layout>
	);
}

export default Index;

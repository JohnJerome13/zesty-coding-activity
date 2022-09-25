import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { fadeIn } from '../config/animations';

const MotionBox = motion(Box);

function Footer() {
	return (
		<MotionBox
			initial='offscreen'
			whileInView='onscreen'
			variants={fadeIn}
			component='footer'
			sx={{ bgcolor: 'background.paper', py: 6 }}
		>
			<Container maxWidth='lg'>
				<Typography variant='body2' color='text.secondary' align='center'>
					© Zesty.io Platform, Inc. All Rights Reserved.
				</Typography>
			</Container>
		</MotionBox>
	);
}

export default Footer;

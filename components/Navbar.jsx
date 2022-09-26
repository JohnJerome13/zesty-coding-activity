import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Import components
import Logo from './Logo';

const drawerWidth = 240;

const navItems = [
	{
		text: 'Home',
		href: '/',
	},
	{
		text: 'About',
		href: '/about',
	},
];

function Navbar(props) {
	const drawer = (
		<Box onClick={props.handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				<Logo
					sx={{
						height: 42,
						width: 150,
					}}
				/>
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<Link key={item.text} href={item.href} passHref>
						<ListItem component='a' disablePadding>
							<ListItemButton sx={{ textAlign: 'center' }}>
								<ListItemText style={{ color: '#000' }} primary={item.text} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</Box>
	);
	const router = useRouter();

	return (
		<>
			<AppBar
				component='nav'
				color='default'
				sx={{
					background:
						'-webkit-linear-gradient(-25deg, #fff 65%, rgb(255, 93, 10) 65%)',
				}}
			>
				<Container maxWidth='lg'>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={props.handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Box
							sx={{
								flexGrow: 1,
								display: 'flex',
							}}
						>
							<Logo
								sx={{
									width: 150,
									display: { xs: 'none', sm: 'block' },
								}}
							/>
						</Box>

						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							{navItems.map((item) => (
								<Link key={item.text} href={item.href} passHref>
									<Button
										variant='text'
										sx={{
											color: '#fff',
											marginRight: 3,
											'&:hover': {
												background: 'rgba(218, 223, 225, 0.25)',
											},
										}}
										className={router.pathname != item.href ? 'inactive' : ''}
										component='a'
									>
										{item.text}
									</Button>
								</Link>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			<Box component='nav'>
				<Drawer
					container={props.container}
					variant='temporary'
					open={props.mobileOpen}
					onClose={props.handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</>
	);
}

Navbar.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Navbar;

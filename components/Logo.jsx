import Box from '@mui/material/Box';

const Logo = (props) => (
	<Box
		component='img'
		alt='Zesty.io'
		src='/zesty-io-logo-horizontal.svg'
		{...props}
	/>
);

export default Logo;

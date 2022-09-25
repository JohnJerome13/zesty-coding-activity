import Head from 'next/head';
const OpenGraphHead = () => (
	<Head>
		<meta
			property='og:title'
			content='Zesty.io: Simplify digital. Maximize results.'
		/>
		<meta property='og:site_name' content='Zesty.io' />
		<meta
			property='og:description'
			content='Zesty is built for teams to manage and distribute content to multiple sites, devices, and anywhere else it needs to go.'
		/>
		<meta property='og:type' content='profile' />
		<meta property='og:image' content='/zesty-io-logo-horizontal.svg'></meta>
	</Head>
);
export default OpenGraphHead;

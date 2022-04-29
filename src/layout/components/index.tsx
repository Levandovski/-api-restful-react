import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from './styles';
import { Routes } from '../../routes';

const Layout: React.FC = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '100vh' }}>

			<Header />
			<Container>
				<Routes />
			</Container>
			<Footer />

		</div>
	)
}

export default Layout;

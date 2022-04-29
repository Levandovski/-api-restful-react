import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/components';
import { Routes } from './routes';
import { GlobalSyled } from './styles/globals';

export const App: React.FC = () => {

	let signed: boolean = true;
	return (
		<BrowserRouter>
			<GlobalSyled />
			{signed ? <Layout /> : <Routes />}
		</BrowserRouter>
	);
}


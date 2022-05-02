import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/components';
import { Routes } from './routes';
import { GlobalSyled } from './styles/Globals';

export const App: React.FC = () => {

	let signed: boolean = true;
	return (
		<BrowserRouter>
			{signed ? <Layout /> : <Routes />}
			<GlobalSyled />
		</BrowserRouter>
	);
}


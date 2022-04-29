import React from 'react';
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { routes } from './routes';
import { Login } from '../pages/Login';


// import { Container } from './styles';

interface routesProps {
	id: number;
	path: string;
	component: React.FC;
}

export const Routes: React.FC = () => {
	let signed: boolean = true;

	if (!signed) {
		return (
			<Switch>
				<Route path="/" element={<Login />} />
				<Route path="*" element={<Navigate to={'/'} />} />
			</Switch >
		)
	}
	return (
		<Switch>
			{routes.map((e: routesProps) => {
				return <Route key={e.id} path={e.path} element={<e.component />} />
			})}
		</Switch >
	)
}


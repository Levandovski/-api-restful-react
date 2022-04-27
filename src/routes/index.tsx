import React from 'react';
import { Routes as Switch, Route } from "react-router-dom";
import { routes } from './routes';


// import { Container } from './styles';

interface routesProps {
	id: number;
	path: string;
	component: string;
}

export const Routes: React.FC = () => {
	return (
		<Switch>
			{routes.map((e: any) => {
				return <Route path={e.path} key={e.id} element={<e.component />} />
			})}
		</Switch >
	)
}


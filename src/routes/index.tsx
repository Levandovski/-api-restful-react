import React from 'react';
import { Routes as Switch, Route } from "react-router-dom";
import { routes } from './routes';


// import { Container } from './styles';

interface routesProps{
	id: number;
	path: string;
	component: React.FC;
}

export const Routes: React.FC = () => {

	let signed: boolean = true;

	if(!signed){
		return (
			<Switch>
				{routes.map((e: routesProps) => {
					return <Route key={e.id} path={e.path} element={<e.component />} />
				})}
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


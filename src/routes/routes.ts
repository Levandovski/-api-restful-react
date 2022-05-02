import React from "react";
import Produtos from "../pages/Dashboard/Produtos";
import { Login } from "../pages/Login";

interface routesProps {
	id: number;
	path: string;
	component: React.FC;
}

export const routes: routesProps[] = [
	{
		id: 0,
		path: "/dashboard/produtos",
		component: Produtos,
	},
];

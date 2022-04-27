import Produtos from "../pages/Dashboard/Produtos";
import { Login } from "../pages/Login";

interface routesProps {
	id: number;
	path: string;
	component: object;
}

export const routes: routesProps[] = [
	{
		id: 0,
		path: "/login",
		component: Login,
	},
	{
		id: 1,
		path: "/dashboard/produtos",
		component: Produtos,
	},
];

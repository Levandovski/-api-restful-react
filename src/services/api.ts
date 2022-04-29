//axios
import React from "react";
import axios from "axios";
// import { Container } from './styles';

const api = (() => {
	const axiosInstance = axios.create({
		baseURL: "http://localhost:3002",
		timeout: 1000,
		headers: { "Content-Type": "application/json" },
	});

	return axiosInstance;
})();

export default api;

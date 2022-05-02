import styled from "styled-components";

export const ContainerHeader = styled.div`
	position: sticky;
	position: -webkit-sticky;
	display: flex;
	flex-direction: column;
	top: 0;
	min-height: 84px;
	z-index: 10;
	background: #7a28a3;
`;

export const HeaderContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 6.5%;
	justify-content: space-evenly;
	background: #1E90FF;
	width: auto;
	height: 84px;
`;

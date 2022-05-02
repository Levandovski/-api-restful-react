import styled from "styled-components";

export const ContainerHeader = styled.div`
	position: sticky;
	position: -webkit-sticky;
	display: flex;
	flex-direction: column;
	top: 0;
	min-height: 84px;
	z-index: 10;
	background: #FF8300;
`;

export const HeaderContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 6.5%;
	justify-content: space-evenly;
	background: #FF8300;
	width: auto;
	height: 84px;
`;

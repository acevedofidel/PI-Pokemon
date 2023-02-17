import styled from 'styled-components';

export const PaginateNav = styled.nav`
	display: flex;
	justify-content: center;
	margin: 30px;
`;

export const PaginateUl = styled.ul`
    display: flex;
    list-style: none;
`;

export const PaginateButton = styled.button`
	font-family: 'Press Start 2P', cursive;
	font-size: 1rem;
	color: #272a2c;
	text-transform: uppercase;
	text-decoration: none;
	padding: 15px 20px;
	border: 2px solid #111;
	background: rgb(244, 208, 63);
	box-shadow: 3px 3px #111;
	cursor: pointer;
	margin-right: 20px;

	&:hover {
		background-color: #272a2c;
		color: rgb(235, 152, 78);

	}

	&:active {
		background-color: #101a31;
		color: rgb(244, 208, 63);
		
	}

	&.active {
		background-color: #272a2c;
		color: rgb(241, 148, 138);
		
	}
`;

export const StyledImgNotFound = styled.img`
	box-shadow: #111 6px 6px;
	border: 2px solid #111;
	width: 280px;
	height: 400px;
	margin: 20px 0px;
	object-fit: cover;
`;

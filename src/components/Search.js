import React from 'react';
import styled from '@emotion/styled'

import SearchImage from '../images/search.svg';

const SearchConteiner = styled.div`
	position: relative;
	width: 100%;
`
const SearchInput = styled.input`
	padding: 16px 20px 16px 15px;
	width: 100%;
	height: 47px;
	border: none;
	box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
	outline: none;
	font-size: 16px;
	line-height: 12px;
	font-family: "CircularStd Book", Arial, sans-serif;
	color: #9b9b9b;
	text-align: left;
	box-sizing: border-box;
`
const SearchImg = styled.img`
	position: absolute;
	top: 15px;
	right: 18px;
	width: 15px;
	height: 15px;
	&:hover {
		cursor: pointer;
	}
`

function Search() {
	return(
		<SearchConteiner>
			<SearchInput type="text" placeholder="Search" />
			<SearchImg src={SearchImage} />
		</SearchConteiner>
	);
}

export default Search;
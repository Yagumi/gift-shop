import React, { useState } from 'react';
import uuid from 'uuid/v4';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import regulareGift from '../images/gift.png';
import boxGift from '../images/box-gift.png';
import chocolate from '../images/chocolate.png';
import giftWithCard from '../images/gift-with-card.png';
import TopCategoriesSingleProduct from './TopCategoriesSingleProduct';

const TopCategoriesContainer = styled.div`
	padding-top: 10px;
	overflow-x: auto;
  &::-webkit-scrollbar {
  	display: none;
  }
`
const TopCategoriesHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const TopCategoriesTitle = styled.h1`
	margin: 0;
	font-family: "CircularStd Medium", Arial, sans-serif;
	font-size: 21px;
	line-height: 18px;
`
const TopCategoriesButton = styled.button`
	align-item: center;
	color: #6f8ecf;
	outline: none;
	background: transparent;
	border: none;
	font-size: 10px;
	cursor: pointer;
`
const TopCategoriesList = styled.ul`
	padding: 0;
	display: flex;
	justify-content: space-between;
	@media(min-width: 768px) {
    justify-content: flex-start;
  }
`
const TopCategoriesRoute = styled(Link)`
	text-decoration: none;
	@media(min-width: 768px) {
    width: 140px;
    margin-right: 20px;
  }
`

function TopCategories() {
	const [categories, setCategories] = useState([
		{
			name: "Regular Gift", 
			url: regulareGift, 
			id: uuid(), 
			bgc: "linear-gradient( -62.95deg, rgb(142,162,255) 0%, rgb(85,122,199) 100%)" 
		},
		{
			name: "Box Gift", 
			url: boxGift, 
			id: uuid(),
			bgc: "linear-gradient( -48.52deg, rgb(80,249,180) 0%, rgb(56,202,233) 100%)" 
		},
		{
			name: "Chocolate", 
			url: chocolate, 
			id: uuid(),
			bgc: "linear-gradient( -46.856deg, rgb(255,179,151) 0%, rgb(244,106,160) 100%)"
		},
		{
			name: "Gift with card", 
			url: giftWithCard, 
			id: uuid(),
			bgc: "linear-gradient( -59.49deg, rgb(207,149,255) 0%, rgb(59,92,254) 100%)"
		},
	])
	
	const goodsList = categories.map(item => (
		<TopCategoriesRoute to="/product" key={item.id}>
			<TopCategoriesSingleProduct item={item} />
		</TopCategoriesRoute>
	))
	return(
		<TopCategoriesContainer>
			<TopCategoriesHeader>
				<TopCategoriesTitle>Top Categories</TopCategoriesTitle>
				<TopCategoriesButton>See all</TopCategoriesButton>
			</TopCategoriesHeader>
			<TopCategoriesList>
				{goodsList}
			</TopCategoriesList>
		</TopCategoriesContainer>
	);
}

export default TopCategories;


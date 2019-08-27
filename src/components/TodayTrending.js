import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import MiniProduct from './MiniProduct';

const TodayTrendingTitle = styled.h1`
	padding-top: 30px;
	text-align: left;
	font-family: "CircularStd Medium", Arial, sans-serif;
	font-size: 21px;
	line-height: 18px;
	& > span {
		font-family: "CircularStd Book", Arial, sans-serif;
		font-size: 10px;
		line-height: 12px;
		color: #9b9b9b;
	}
`
const TodayTrendingList = styled.ul`
	display: flex;
	overflow-x: auto;
	padding: 0;
	min-height: 140px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.04);
	&::-webkit-scrollbar { 
    display: none; 
	}
`
const TodayTrendingRoute = styled(Link)`
	text-decoration: none;
`

function TodayTrending({data, getClikedProduct}) {
	const goodsList = data.map(good => (
		<TodayTrendingRoute 
			to={`/product/${good.name}`} 
			key={good._id}
		>
			<MiniProduct  
				product={good} 
				getClikedProduct={getClikedProduct} 
			/>
		</TodayTrendingRoute>
	));
	const date = new Date();   
  const day = { day: "numeric" };
  const month = {month: "short"}

	return(
		<div>
			<TodayTrendingTitle>
				Today Trending 
				<span> {date.toLocaleString("en-US", day)}th </span>
				<span>{date.toLocaleString("en-US", month)}</span>
			</TodayTrendingTitle>
			<TodayTrendingList>
				{goodsList}
			</TodayTrendingList>
		</div>
	)
}

export default TodayTrending;
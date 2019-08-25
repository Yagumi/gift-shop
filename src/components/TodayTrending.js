import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import MiniProduct from './MiniProduct';

const TodayTrendingTitle = styled.h1`
	text-align: left;
`

const TodayTrendingList = styled.ul`
	display: flex;
	overflow-x: auto;
	padding: 0;
`
const TodayTrendingItem = styled.li`
	
`

function TodayTrending({data, getClikedProduct}) {
	const goodsList = data.map(good => (
		<Link 
			to={`/product/${good.name}`} 
			key={good._id}
		>
			<MiniProduct  
				product={good} 
				getClikedProduct={getClikedProduct} 
			/>
		</Link>
	));
	
	return(
		<div>
			<TodayTrendingTitle>Today Trending</TodayTrendingTitle>
			<TodayTrendingList>
				{goodsList}
			</TodayTrendingList>
		</div>
	)
}

export default TodayTrending;
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import MiniProduct from './MiniProduct';

const Ul = styled.ul`
	// display: flex;
	// width: 100%;
	// overflow: hidden;
`
const Li = styled(MiniProduct)`
	color: red;
`

function TodayTrending({data, getClikedProduct}) {
	const goodsList = data.map(good => (
		<Link to={`/product/${good.name}`} key={good._id}>
			<MiniProduct  
				product={good} 
				getClikedProduct={getClikedProduct} 
			/>
		</Link>
	));
	
	return(
		<div>
			<h1>Today Trending</h1>
			<Ul>
				{goodsList}
			</Ul>
		</div>
	)
}

export default TodayTrending;
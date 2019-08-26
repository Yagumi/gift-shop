import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import SingleProductMini from './SingleProductMini';

const BestSellingContainer = styled.div`
	
`
const BestSellingHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const BestSellingTitle = styled.h1`
	font-size: 21px;
	line-height: 18px;
`
const BestSellingSubtitle = styled.span`
	font-size: 10px;
	line-height: 12px;
	color: #9b9b9b;
`
const BestSellingList = styled.ul`
	padding: 0;
	display: flex;
	justify-content: space-between;
	overflow-x: auto;
`
const BestSellingButton = styled.button`
	align-item: center;
	color: #6f8ecf;
	outline: none;
	background: transparent;
	border: none;
	font-size: 10px;
	cursor: pointer;
`

function BestSelling({data, getClikedProduct}) {
	const [sortedData, setSortedData] = useState([]);

	useEffect(() => {
		const copyData = data.slice();
		const sortArr = (a, b) => {
			return b.rate - a.rate 
		};
		const sortedArr = copyData.sort(sortArr);
		setSortedData(sortedArr)
	},[data])
	

	const goodsList = sortedData.map(good => (
		<Link 
			to={`/product/${good.name}`} 
			key={good._id}
		>
			<SingleProductMini 
				product={good}
				getClikedProduct={getClikedProduct} 
			/>
		</Link>
	))
	return(
		<BestSellingContainer>
			<BestSellingHeader>
				<BestSellingTitle>Best Selling<BestSellingSubtitle>This week</BestSellingSubtitle></BestSellingTitle>
				<BestSellingButton>See all</BestSellingButton>
			</BestSellingHeader>
			<BestSellingList>
				{goodsList}
			</BestSellingList>
		</BestSellingContainer>
	);
}

export default BestSelling;
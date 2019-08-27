import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import SingleProductMini from './SingleProductMini';

const RelatedListHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const RelatedListButton = styled(Link)`
	text-align: left;
	font-family: "CircularStd Book", Arial, sans-serif;
	font-size: 10px;
	line-heigh: 12px;
	color: #557ac7;
	text-decoration: none;
`
const RelatedListTitle = styled.h2`
	text-align: left;
	font-family: "CircularStd Medium", Arial, sans-serif;
	font-size: 21px;
	line-heigh: 18px;
`
const RelatedListContainer = styled.div`
  min-width: 100%;
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
  	display: none;
  }
`
const RelatedListProductsContainer = styled(Link)`
	text-decoration: none;
	margin-right: 17px;
	
`


function RelatedList({clickedProduct, getClikedProduct, allProductsList}) {
	const list = allProductsList.map(product => (
		<RelatedListProductsContainer 
			to={`/product/${product.name}`} 
			key={product._id}
		>
			<SingleProductMini 
				key={product._id} 
				product={product} 
				clickedProduct={clickedProduct}
				getClikedProduct={getClikedProduct}
			/>
		</RelatedListProductsContainer>
	))
	return(
		<>
			<RelatedListHeader>
				<RelatedListTitle>Related products</RelatedListTitle>
				<RelatedListButton to="/">See all</RelatedListButton>
			</RelatedListHeader>
			<RelatedListContainer>
				{list}
			</RelatedListContainer>
		</>
	);
}

export default RelatedList;
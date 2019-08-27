import React from 'react';

import styled from '@emotion/styled';

import Stars from './Stars';

const SingleProductMiniContainer = styled.div`
  width: 95px;
  height: 100%;
  display: flex;
  flex-direction: column;
	position: relative;
	border-radius: 3px;
	box-sizing: border-box;
	& > img {
		width: 100%;
		height: auto;
	}
	& > span {
		position: absolute;
		top: 8px;
		left: 8px;
		width: 36px;
		height: 24px;
		font-size: 12px;
		line-height: 9px;
  	font-family: "CircularStd";
  	background-color: #a6a7d8;
  	text-align: center;
  	color: #ffffff;
  	padding-top: 8px;
  	box-sizing: border-box;
	}
	@media(min-width: 768px) {
    width: 120px;
  }
`
const Image = styled.img`
	width: 95px;
	heigth: 150px;
`
const SingleProductMiniRatingContainer = styled.div`
	display: flex;
	margin-top: auto;
	& > span {
		padding-left: 5px;
		font-family: "CircularStd Book", Arial, sans-serif;
		font-size: 9px;
		line-heigth: 7px;
		color: #9b9b9b;
	}
`
const SingleProductMiniTitle = styled.h3`
	color: #000000;
	text-align: left;
	margin: 0;
	padding-top: 13px;
	font-size: 13px;
	line-height: 18px;
  font-family: "CircularStd Book", Arial, sans-serif;
  color: #4a4a4a;
`

const SingleProductMiniStars = styled(Stars)`
	display: flex;
	& > img {
		padding-right: 1px;
		width: 7px;
		height: 7px;
	}
`

export default({clickedProduct, getClikedProduct, product, ...props}) => {
	return(
		<SingleProductMiniContainer onClick={() => getClikedProduct(product)} {...props}>
			<Image src={product.picture} alt={product.name}/>
			<span>${product.price}</span>
			<SingleProductMiniTitle>{product.name}</SingleProductMiniTitle>
			<SingleProductMiniRatingContainer>
				<SingleProductMiniStars />
				<span>({product.rate})</span> 
			</SingleProductMiniRatingContainer>
		</SingleProductMiniContainer>
	);
}


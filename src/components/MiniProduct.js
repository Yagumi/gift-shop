import React from 'react';
import styled from '@emotion/styled';

import Stars from './Stars';

const MiniProductContainer = styled.div`
	width: 315px;
	height: 100%;
	display: flex;
`
const MiniProductImage = styled.div`
	width: 112px;
	position: relative;
	border-radius: 3px;
	& > img {
		width: 100%;
		height: auto;
	}
	& > span {
		position: absolute;
		top: 8px;
		left: 8px;
		width: 42px;
		height: 28px;
		font-size: 12px;
		line-height: 9px;
  	font-family: "CircularStd";
  	background-color: #a6a7d8;
  	text-align: center;
  	color: #ffffff;
  	padding-top: 8px;
  	box-sizing: border-box;
	}
`
const MiniProductInfo = styled.div`
	margin-left: 19px;
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: center;
`
const MiniProductName = styled.h2`
	margin: 0;
	font-family: "CircularStd Book", Arial, sans-serif;
	font-size: 18px;
	line-height: 18px;
	color: #000000;
`
const MiniProductCompany = styled.span`
	padding-top: 5px;
	font-family: "CircularStd Book", Arial, sans-serif;
	font-size: 13px;
	line-height: 18px;
	color: #9b9b9b;
`
const MiniProductRating = styled.div`
	margin-top: 10px;
	display: flex;
	align-items: center;
	& > span {
		padding-left: 5px;
		font-family: "CircularStd Book", Arial, sans-serif;
		font-size: 10px;
		line-height: 8px;
		color: #9b9b9b;
	}
`
const MiniProductStarsConteiner = styled(Stars)`
	& > img {
		padding-right: 1px;
		width: 10px;
		height: 10px;
	}
`
const MiniProductButton = styled.button`
	margin-top: 10px;
	width: 89px;
	height: 26px;
	background-image: linear-gradient( 90deg, rgb(142,162,255) 0%, rgb(85,122,199) 100%);
	border-radius: 3px;
	border: none;
	outline: none;
	cursor: pointer;
	box-sizing: border-box;
	color: #ffffff;
	font-family: "CircularStd Book", Arial, sans-serif;
	font-size: 10px;
	line-height: 18px;
`

export default ({product, getClikedProduct, ...props}) => {
	return(
		<MiniProductContainer  onClick={() => getClikedProduct(product)} {...props}>
			<MiniProductImage>
				<img src={product.picture} alt="" />
				<span>${product.price}</span>
			</MiniProductImage>
			<MiniProductInfo>
				<MiniProductName>{product.name}</MiniProductName>
				<MiniProductCompany>{product.company}</MiniProductCompany>
				<MiniProductRating>
					<MiniProductStarsConteiner />
					<span>({product.rate})</span>
				</MiniProductRating>
				<MiniProductButton>Add to cart</MiniProductButton>
			</MiniProductInfo>
		</MiniProductContainer>
	);
}


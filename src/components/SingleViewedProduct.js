import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import Rating from './Rating';
import Sizes from './Sizes';
import CartCounter from './CartCounter';

import BackArrow from '../images/back-arrow.svg';

const SingleViewedProductContainer = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`
const SingleViewedProductInfoWrapper = styled.div`
	text-align: left;
`
const SingleViewedProductTitle = styled.h1`
	font-size: 24px;
	line-height: 18px;
	font-family: "CircularStd Medium", Arial, sans-serif;
`
const SingleViewedProductSubTitle = styled.h2`
	font-size: 13px;
	line-height: 18px;
	font-family: "CircularStd Book", Arial, sans-serif;
	color: #4a4a4a;
	text-align: left;
`
const SingleViewedProductPrice = styled.h3`
	font-size: 20px;
	line-height: 18px;
	font-family: "CircularStd Book", Arial, sans-serif;
	color: #4a4a4a;
`
const SingleViewedProductText = styled.p`
	width: 175px;
	font-size: 11px;
	line-height: 18px;
	font-family: "CircularStd Book", Arial, sans-serif;
	color: #9b9b9b;
	@media(min-width: 768px) {
    width: 80%;
  }
`
const SingleViewedProductImageContainer = styled.div`
	@media(min-width: 768px) {
    width: 20%;
  }
`
const SingleViewedProductImage = styled.img`
	width: 120px;
	height: 150px;
`
const SingleViewedProductLinkRouteContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`
const SingleViewedProductLinkRoute = styled(Link)`
	position: relative;
	& > img {
		potision: absolute;
		top: 0;
		left: 0;
		width: 18px;
		height: 15px;
	}
`
const SingleViewedProductRating = styled(Rating)`
	display: flex;
	& > img {
		width: 16px;
		height: 16px;
	}
`

function SingleViewedProduct({clickedProduct, updateCard}) {
	const [giftSize, setGiftSize] = useState()
	
	const getSize = (productSize) => {
		const s = productSize
		setGiftSize(productSize)
	}
		
	return(
		<div>
			<SingleViewedProductLinkRouteContainer>
				<SingleViewedProductLinkRoute to="/"> <img src={BackArrow} alt="back arrow" /></SingleViewedProductLinkRoute>
			</SingleViewedProductLinkRouteContainer>
			<SingleViewedProductContainer>
				<SingleViewedProductInfoWrapper>
					<SingleViewedProductTitle>{clickedProduct.name}</SingleViewedProductTitle>
					<SingleViewedProductSubTitle>{clickedProduct.company}</SingleViewedProductSubTitle>
					<SingleViewedProductPrice>${clickedProduct.price}</SingleViewedProductPrice>
					<SingleViewedProductText>{clickedProduct.about}</SingleViewedProductText>
				</SingleViewedProductInfoWrapper>
				<SingleViewedProductImageContainer>
					<SingleViewedProductImage src={clickedProduct.picture} alt={clickedProduct.name} />
				</SingleViewedProductImageContainer>
			</SingleViewedProductContainer>
			<SingleViewedProductSubTitle>Rating</SingleViewedProductSubTitle>
			<SingleViewedProductRating clickedProduct={clickedProduct} />
			<Sizes product={clickedProduct} getSize={getSize}/>
			<CartCounter product={clickedProduct} updateCard={updateCard} giftSize={giftSize}/>
		</div>
	);
}

export default SingleViewedProduct;

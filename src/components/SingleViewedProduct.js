import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import Rating from './Rating';
import Sizes from './Sizes';
import CartCounter from './CartCounter';

import BackArrow from '../images/back-arrow.svg';

const Container = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`
const InfoWrapper = styled.div`
	text-align: left;
`
const Title = styled.h1`
	font-size: 24px;
	line-height: 18px;
	font-family: "CircularStd Medium", Arial, sans-serif;
`
const SubTitle = styled.h2`
	font-size: 13px;
	line-height: 18px;
	font-family: "CircularStd Book", Arial, sans-serif;
	color: #4a4a4a;
	text-align: left;
`
const Price = styled.h3`
	font-size: 20px;
	line-height: 18px;
	font-family: "CircularStd Book", Arial, sans-serif;
	color: #4a4a4a;
`
const Text = styled.p`
	width: 175px;
	font-size: 11px;
	line-height: 18px;
	font-family: "CircularStd Book", Arial, sans-serif;
	color: #9b9b9b;
`
const Image = styled.img`
	width: 120px;
	height: 150px;
`
const LinkRouteContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`
const LinkRoute = styled(Link)`
	position: relative;
	& > img {
		potision: absolute;
		top: 0;
		left: 0;
		width: 18px;
		height: 15px;
	}
`
const RatingSingleViewedProduct = styled(Rating)`
	display: flex;
	& > img {
		width: 16px;
		height: 16px;
	}
`

function SingleViewedProduct({clickedProduct, updateCard}) {
	return(
		<div>
			<LinkRouteContainer>
				<LinkRoute to="/"> <img src={BackArrow} alt="back arrow" /></LinkRoute>
			</LinkRouteContainer>
			<Container>
				<InfoWrapper>
					<Title>{clickedProduct.name}</Title>
					<SubTitle>{clickedProduct.company}</SubTitle>
					<Price>${clickedProduct.price}</Price>
					<Text>{clickedProduct.about}</Text>
				</InfoWrapper>
				<Image src={clickedProduct.picture} alt={clickedProduct.name} />
			</Container>
			<SubTitle>Rating</SubTitle>
			<RatingSingleViewedProduct clickedProduct={clickedProduct} />
			<Sizes product={clickedProduct} />
			<CartCounter product={clickedProduct} updateCard={updateCard}/>
		</div>
	);
}

export default SingleViewedProduct;

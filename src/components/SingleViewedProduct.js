import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import Rating from './Rating';
import Sizes from './Sizes';

import Left from '../images/left.svg';
import Right from '../images/right.svg';

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
	heigth: 150px;
	background: red;
`
const ArrowsAndCart = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`
const Button = styled.button`
	position: relative;
	box-sizing: border-box;
	width: 6px;
	height: 10px;
	border: none;
	outline: none;
	cursor: pointer;
	background: transparent;
`
const LeftArrow = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 6px;
	height: 10px;
`
const RightArrow = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	width: 6px;
	height: 10px;
`

function SingleViewedProduct({clickedProduct}) {
	return(
		<div>
			<Link to="/">Back</Link>
			<Container>
				<InfoWrapper>
					<Title>{clickedProduct.name}</Title>
					<SubTitle>{clickedProduct.company}</SubTitle>
					<Price>${clickedProduct.price}</Price>
					<Text>{clickedProduct.about}</Text>
				</InfoWrapper>
				<Image src={clickedProduct.picture} alt={clickedProduct.name} />
			</Container>
			<Rating product={clickedProduct} />
			<Sizes product={clickedProduct} />
			<ArrowsAndCart>
				<Button><LeftArrow src={Left} alt="left arrow"/></Button>
				<span>1</span>
				<Button><RightArrow src={Right} alt="right arrow"/></Button>
				<button>Add to cart</button>
			</ArrowsAndCart>
		</div>
	);
}

export default SingleViewedProduct;

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import SingleProductMini from './SingleProductMini';

import Star from '../images/star.svg';

const StarsWrapper = styled.div`
	display: flex;
`
const SubTitle = styled.h2`
	font-size: 13px;
	line-height: 18px;
	font-family: "CircularStd Book", Arial, sans-serif;
	color: #4a4a4a;
	text-align: left;
`
const StarItem = styled.img`
	width: 16px;
	height: 16px;
`
const RatingNum = styled.span`
	width: 20px;
	margin-left: 13px;
	font-size: 16px;
	line-height: 12.8px;
	color: #9b9b9b;
`

function Rating({product}) {
	const newRate = product.rate.slice();
	const [rating, setRating] = useState(newRate)
	
	const updateRating = () => {
		const sum = rating.reduce((sum, next) => sum + next, 0)
		return sum
	}

	const stars = new Array(5).fill('').map((star, index) => (
		<StarItem src={Star} key={index} />
	))
	return(
		<div>
			<SubTitle>Rating</SubTitle>
			<StarsWrapper>
				<div>
					{stars}
				</div>
				<RatingNum>({updateRating()})</RatingNum>
			</StarsWrapper>
		</div>
	);
}
export default Rating;
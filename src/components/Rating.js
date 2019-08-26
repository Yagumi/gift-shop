import React from 'react';
import styled from '@emotion/styled';

import Stars from './Stars';

const RatingContainer = styled.div`
	display: flex;
`
const StarsConteiner = styled(Stars)`
	display: flex;
	& > img {
		width: 16px;
		height: 16px;
	}
`
const RatingNum = styled.span`
	width: 20px;
	margin-left: 13px;
	font-size: 16px;
	line-height: 12.8px;
	color: #9b9b9b;
`

export default ({clickedProduct, ...props}) => {
	if(clickedProduct.length === 0) {
		return( <RatingContainer {...props}>
			<StarsConteiner />
			<RatingNum>(0)</RatingNum>
		</RatingContainer>
		)
	}
	return(
		<RatingContainer {...props}>
			<StarsConteiner />
			<RatingNum>({clickedProduct.rate})</RatingNum>
		</RatingContainer>
	);
}

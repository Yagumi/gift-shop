import React, { useState } from 'react';
import styled from '@emotion/styled';

import Star from '../images/star.svg';

const StarsWrapper = styled.div`
	display: flex;
`

export default ({...props}) => {
	const stars = new Array(5).fill('').map((star, index) => (
		<img src={Star} key={index} />
	))
	return(
		<StarsWrapper {...props}>
			{stars}
		</StarsWrapper>
	);
}

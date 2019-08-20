import React from 'react';
import styled from '@emotion/styled';

import SingleProductMini from './SingleProductMini';

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Title = styled.h1`
	font-size: 21px;
	line-height: 18px;
`
const Subtitle = styled.span`
	font-size: 10px;
	line-height: 12px;
	color: #9b9b9b;
`
const List = styled.ul`
	padding: 0;
	display: flex;
	justify-content: space-between;
`
const Button = styled.button`
	align-item: center;
	color: #6f8ecf;
	outline: none;
	background: transparent;
	border: none;
	font-size: 10px;
	cursor: pointer;
`

function BestSelling({data}) {
	const goodsList = data.map(good => (
		<SingleProductMini key={good._id} good={good} />
	))
	return(
		<div>
			<Header>
				<Title>Best Selling<Subtitle>This week</Subtitle></Title>
				<Button>See all</Button>
			</Header>
			<List>
				{goodsList}
			</List>
		</div>
	);
}

export default BestSelling;
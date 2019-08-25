import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	width: 100%;
	text-align: left;
`

const SubTitle = styled.h2`
	font-size: 13px;
	line-height: 18px;
	font-family: "CircularStd Book", Arial, sans-serif;
	color: #4a4a4a;
`
const Button = styled.button`
	margin-right: 14px;
	padding: 0;
	padding-left: 16px;
	box-sizing: border-box;
	width: 85px;
	height: 46px;
	font-size: 14px;
	line-height: 10px;
	font-family: "CircularStd Book", Arial, sans-serif;
	color: #4a4a4a;
	text-align: left;
	border: 1px solid #c7c7c7;
	outline: none;
	cursor: pointer;
	background: transparent;
	& > span{
		font-size: 9px;
		line-height: 7px;
		font-family: "CircularStd Book", Arial, sans-serif;
		color: #9b9b9b;
	}
	&:hover {
		border: 1px solid #8ea2ff;
	}
	&:focus {
		border: 1px solid #8ea2ff;
	}
`
function Sizes({product}) {
	
	return(
		<Container>
			<SubTitle>Size</SubTitle>
			<Button>Small<br /><span>10cm x 24cm</span></Button>
			<Button>Medium<br /><span>14cm x 28cm</span></Button>
			<Button>Large<br /><span>18cm x 32cm</span></Button>
		</Container>
	);
}

export default Sizes;
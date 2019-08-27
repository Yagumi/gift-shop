import React, { useReducer,useEffect, useState } from 'react';
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

const initialSize = {
	size: "",
}

const reducer = function(state, action) {
	switch(action.type) {
		case 'small': 
			return {
				...state, size: "small"
			};
		case 'medium':
			return {
				...state, size: "medium"
			};
		case 'big':
			return {
				...state, size: "big"
			};
		case 'reset':
			return {
				...state, size: ''
			}
		default:
			throw new Error();
	}
}

function Sizes({product, getSize, ...props}) {
	const [state, dispatch] = useReducer(reducer, initialSize);
	const [popUp, setPopUp] = useState(false)
	
	useEffect(() => {
		if(product.sizes !== undefined) {
			const arr = [];
			let obj = {}
			obj = product.sizes;
			Object.keys(obj).forEach(function(key) {
				arr.push(obj[key])
			})
			console.log(arr)
			if(arr.every(item => item === false)) {
				setPopUp(true)		
			} else {
				setPopUp(false)	
			}
		}
	},[product])

	useEffect(() => {
		getSize(state.size)
	},[state])
	
	if(product.sizes === undefined) {
		return(
			<Container>
				<SubTitle>Size</SubTitle>
			</Container>
		)
	}
	if(popUp) {
		return(
			<Container>
				<SubTitle>Sorry there is no this gift now!</SubTitle>
			</Container>
		)
	}
	return(
		<Container>
			<SubTitle>Size</SubTitle>
			{product.sizes.small && <Button className ="small" onClick={() => dispatch({type: 'small'})}>Small<br /><span>10cm x 24cm</span></Button>}
			{product.sizes.medium && <Button className ="medium" onClick={() => dispatch({type: 'medium'})}>Medium<br /><span>14cm x 28cm</span></Button>}
			{product.sizes.big && <Button className ="big" onClick={() => dispatch({type: 'big'})}>Large<br /><span>18cm x 32cm</span></Button>}
		</Container>
	);
}

export default Sizes;
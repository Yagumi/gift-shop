import React, { useReducer } from 'react';
import styled from '@emotion/styled';

import Left from '../images/left.svg';
import Right from '../images/right.svg';

const Cart = styled.div`
	margin-top: 34px;
	padding-left: 10px;
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
const Count = styled.span`
	padding-top: 8px;
	width: 42px;
	text-align: center;
	font-size: 21px;
	line-height: 12px;
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
const AddButton = styled.button`
	margin-left: 28px;
	width: 140px;
	height: 42px;
	background-image: linear-gradient( 90deg, rgb(142,162,255) 0%, rgb(85,122,199) 100%);
	border-radius: 3px;
	border: none;
	outline: none;
	cursor: pointer;
	box-sizing: border-box;
	color: #ffffff;
	font-family: "CircularStd Book", Arial, sans-serif;
	font-size: 16px;
	line-height: 29px;
`
const initialCount = { count: 1 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			if(state.count <= 1) {
				return { count: 1 }
			} else {
				return { count: state.count - 1 };
			}
		default:
			throw new Error();
	}
	
}

function CartCounter({product, updateCard}) {
	const [state, dispatch] = useReducer(reducer, initialCount);
	const handleUpdate = () => {
		const id = product._id;
		const count = state.count;
		const cartProduct = {
			productId: id,
			productCount: count
		}
		updateCard(cartProduct)
	}

	return(
		<Cart>
			<Button onClick={() => dispatch({type: "decrement"})}><LeftArrow src={Left} alt="left arrow"/></Button>
			<Count>{state.count}</Count>
			<Button onClick={() => dispatch({type: "increment"})}><RightArrow src={Right} alt="right arrow"/></Button>
			<AddButton onClick={handleUpdate}>Add to cart</AddButton>
		</Cart>
	);
}

export default CartCounter;
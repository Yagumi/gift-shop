import React, { useReducer } from 'react';
import styled from '@emotion/styled';

import Left from '../images/left.svg';
import Right from '../images/right.svg';

const CartCounterCart = styled.div`
	margin-top: 34px;
	padding-left: 10px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`
const CartCounterButton = styled.button`
	position: relative;
	box-sizing: border-box;
	width: 6px;
	height: 10px;
	border: none;
	outline: none;
	cursor: pointer;
	background: transparent;
`
const CartCounterCount = styled.span`
	padding-top: 8px;
	width: 42px;
	text-align: center;
	font-size: 21px;
	line-height: 12px;
`
const CartCounterLeftArrow = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 6px;
	height: 10px;
`
const CartCounterRightArrow = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	width: 6px;
	height: 10px;
`
const CartCounterAddButton = styled.button`
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
	composes: 
`
const PopUp = styled.div`
	width: 200px;
	height: 100px;
	border: 1px solid black;
`
const PopUpTitle = styled.h3`
`
const initialCount = { count: 1 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { ...state, count: state.count + 1 };
		case 'decrement':
			if(state.count <= 1) {
				return { count: 1 }
			} else {
				return { ...state, count: state.count - 1 };
			}
		case 'reset': {
			return { count: 1 }
		}
		default:
			throw new Error();
	}
	
}

function CartCounter({product, giftSize, updateCard}) {
	const [state, dispatch] = useReducer(reducer, initialCount);
	const handleUpdate = () => {
		const id = product._id;
		const count = state.count;
		const sizeP = giftSize;

		const cartProduct = {
			productId: id,
			productCount: count,
			productSize: sizeP
		}
		updateCard(cartProduct)
		dispatch({type: 'reset'})
	}
	return(
		<CartCounterCart>
			<CartCounterButton onClick={() => dispatch({type: "decrement"})}>
				<CartCounterLeftArrow src={Left} alt="left arrow"/>
			</CartCounterButton>
			<CartCounterCount>{state.count}</CartCounterCount>
			<CartCounterButton onClick={() => dispatch({type: "increment"})}>
				<CartCounterRightArrow src={Right} alt="right arrow"/>
			</CartCounterButton>
			<CartCounterAddButton onClick={handleUpdate}>Add to cart</CartCounterAddButton>
		</CartCounterCart>
	);
}

export default CartCounter;
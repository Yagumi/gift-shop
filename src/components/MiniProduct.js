import React from 'react';
import styled from '@emotion/styled';

const MiniProductContainer = styled.div`
	width: 315px;
	display: flex;
`
const MiniProductImage = styled.div`
	width: 112px;
	position: relative;
	border-radius: 3px;
	& > img {
		width: 100%;
		height: auto;
	}
	& > span {
		position: absolute;
		top: 8px;
		left: 8px;
		width: 42px;
		height: 28px;
		font-size: 12px;
		line-height: 9px;
  	font-family: "CircularStd";
  	background-color: #a6a7d8;
  	text-align: center;
  	color: #ffffff;
  	padding-top: 8px;
  	box-sizing: border-box;
	}
`


const MiniProductInfo = styled.div`
	margin-left: 19px;
`
const MiniProductName = styled.h2`

`
const MiniProductCompany = styled.span`
`
function MiniProduct({product, getClikedProduct}) {
	return(
		<MiniProductContainer  onClick={() => getClikedProduct(product)}>
			<MiniProductImage>
				<img src={product.picture} alt="" />
				<span>${product.price}</span>
			</MiniProductImage>
			<MiniProductInfo>
				<MiniProductName>{product.name}</MiniProductName>
				<MiniProductCompany>{product.company}</MiniProductCompany>
				<div>({product.rate})</div>
				<button>Add to cart</button>
			</MiniProductInfo>
		</MiniProductContainer>
	);
}

export default MiniProduct;
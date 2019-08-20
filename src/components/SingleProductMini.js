import React from 'react';
import styled from '@emotion/styled';

const Image = styled.img`
	width: 120px;
	heigth: 150px;
	background: red;
`

function SingleProductMini({product}) {
	return(
		<div>
			<Image src={product.picture} alt={product.name}/>
			<button>{product.price}</button>
			<h3>{product.name}</h3>
			<span>starts</span>
		</div>
	);
}

export default SingleProductMini;
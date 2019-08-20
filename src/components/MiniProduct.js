import React from 'react';
import styled from '@emotion/styled';

function MiniProduct({product, getClikedProduct}) {
	return(
		<div  onClick={() => getClikedProduct(product)}>
			<div>
				<img src={product.picture} alt="" />
				<span>${product.price}</span>
			</div>
			<div>
				<h2>{product.name}</h2>
				<span>{product.company}</span>
				<div>raiting({product.rate.reduce(rate => rate)})</div>
				<button>Add to cart</button>
			</div>
		</div>
	);
}

export default ({foo, ...props}) => <MiniProduct {...props} />
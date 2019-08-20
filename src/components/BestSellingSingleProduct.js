import React from 'react';

function BestSellingSingleProduct({good}) {
	return(
		<div>
			<img src={good.img} alt=""/>
			<button>{good.price}</button>
			<h3>{good.name}</h3>
			<span>starts</span>
		</div>
	);
}

export default BestSellingSingleProduct;
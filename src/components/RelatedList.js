import React from 'react';
import SingleProductMini from './SingleProductMini';

function RelatedList({allProductsList}) {
	console.log(allProductsList)
	const list = allProductsList.map(product => (
		<SingleProductMini key={product._id} product={product} />
	))
	return(
		<div>
			{list}
		</div>
	);
}

export default RelatedList;
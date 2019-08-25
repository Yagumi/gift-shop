import React from 'react';
import styled from '@emotion/styled';

import SingleViewedProduct from './SingleViewedProduct';
import RelatedList from './RelatedList';

const Container = styled.div`
	padding: 40px 20px 60px 20px;
`

function ProductPage({getClikedProduct, clickedProduct, allProductsList, updateCard}) { 
	return(
		<Container>
			<SingleViewedProduct 
				clickedProduct={clickedProduct} 
				updateCard={updateCard}
			/>
			<RelatedList 
				clickedProduct={clickedProduct}
				getClikedProduct={getClikedProduct}  
				allProductsList={allProductsList} 
			/>
		</Container>
	);
}

export default ProductPage;
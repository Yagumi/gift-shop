import React from 'react';
import styled from '@emotion/styled';

import SingleViewedProduct from './SingleViewedProduct';
import RelatedList from './RelatedList';

const ProductPageContainer = styled.div`
	padding: 40px 20px 60px 20px;
`

function ProductPage({getClikedProduct, clickedProduct, allProductsList, updateCard}) { 
	return(
		<ProductPageContainer>
			<SingleViewedProduct 
				clickedProduct={clickedProduct} 
				updateCard={updateCard}
			/>
			<RelatedList 
				clickedProduct={clickedProduct}
				getClikedProduct={getClikedProduct}  
				allProductsList={allProductsList} 
			/>
		</ProductPageContainer>
	);
}

export default ProductPage;
import React from 'react';
import styled from '@emotion/styled';

import SingleViewedProduct from './SingleViewedProduct';
import RelatedList from './RelatedList';

const Container = styled.div`
	padding: 24px;
`

function ProductPage({clickedProduct, allProductsList}) { 
	
	return(
		<Container>
			<SingleViewedProduct clickedProduct={clickedProduct} />
			{/*<RelatedList allProductsList={allProductsList} />*/}
		</Container>
	);
}

export default ProductPage;
import React from 'react';
import styled from '@emotion/styled';

const TopCategoriesSingleProductContainer = styled.div`
	width: 72px;
	@media(min-width: 768px) {
    margin-right: 20px;
    width: 100%;
  }
`
const TopCategoriesSingleProductImageWrapper = styled.div`
	height: 50px;
	padding-top: 6px;
	box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
	@media(min-width: 768px) {
    width: 140px;
    height: 100px;
  }
`
const TopCategoriesSingleProductImage = styled.img`
	@media(min-width: 768px) {
  	padding-top: 30px;
  	padding-left: 50px; 
  }
`
const TopCategoriesSingleProductName = styled.h3`
	color: #4a4a4a;
	font-size: 11px;
	text-align: left;
	@media(min-width: 768px) {
    font-size: 18px;
    line-heigh: 18px;
  }
`

export default ({item, ...props})  => {
	return(
		<TopCategoriesSingleProductContainer {...props} >
			<TopCategoriesSingleProductImageWrapper style={{background: item.bgc}}>
				<TopCategoriesSingleProductImage src={item.url} alt={item.name}/>
			</TopCategoriesSingleProductImageWrapper>
			<TopCategoriesSingleProductName>{item.name}</TopCategoriesSingleProductName>
		</TopCategoriesSingleProductContainer>
	);
}

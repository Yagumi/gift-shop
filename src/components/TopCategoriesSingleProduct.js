import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	width: 72px;
`
const ImageWrapper = styled.div`
	height: 50px;
	padding-top: 6px;
	box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
`
const Image = styled.img`
`
const Name = styled.h3`
	color: #4a4a4a;
	font-size: 11px;
	text-align: left;
`

export default ({item, ...props})  => {
	return(
		<Container {...props} >
			<ImageWrapper style={{background: item.bgc}}>
				<Image src={item.url} alt={item.name}/>
			</ImageWrapper>
			<Name>{item.name}</Name>
		</Container>
	);
}

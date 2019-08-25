import React from 'react';
import styled from '@emotion/styled';

import Search from './Search';
import TodayTrending from './TodayTrending';
import BestSelling from './BestSelling';
import TopCategories from './TopCategories';

const HomePage = styled.div`
	padding: 40px 20px 60px 20px;
`

function Home({data, getClikedProduct}) {
	return(
		<HomePage>
			<Search />
			<TodayTrending data={data} getClikedProduct={getClikedProduct} />
			{/*<BestSelling data={data} />*/}
			{/*<TopCategories />*/}
		</HomePage>
	);
}

export default Home;
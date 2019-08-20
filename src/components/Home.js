import React from 'react';

import Search from './Search';
import TodayTrending from './TodayTrending';
import BestSelling from './BestSelling';
import TopCategories from './TopCategories';

function Home({data, getClikedProduct}) {
	return(
		<div>
			<Search />
			<TodayTrending data={data} getClikedProduct={getClikedProduct} />
			{/*<BestSelling data={data} />*/}
			{/*<TopCategories />*/}
		</div>
	);
}

export default Home;
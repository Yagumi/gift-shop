import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
	console.log(props)
	return(
		<div>
			<Link to="/">Back</Link>
			<h1>{props.name}</h1>
			<span>{props.data.company}</span>
			<span>{props.data.price}</span>
			<p>{props.data.about}</p>
		</div>
	);
}

export default Product;
import React from 'react';
import './loadre.scss';

const Loader = () => {
	return (
		<div className='lds-ring'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;

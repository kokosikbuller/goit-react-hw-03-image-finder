import React, { FC } from 'react';
import './button.scss';

interface IProps {
	onChangePage: () => void;
}

const Button: FC<IProps> = ({ onChangePage }) => {
	return (
		<div className='Center'>
			<button onClick={onChangePage} className='Button'>
				Load more
			</button>
		</div>
	);
};

export default Button;

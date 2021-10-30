import React, { useState, FC } from 'react';
import './searchBar.scss';

interface IProps {
	setSearch: (e: any) => void;
}

const Searchbar: FC<IProps> = ({ setSearch }) => {
	const [value, setValue] = useState('');

	const submitForm = (e: any) => {
		e.preventDefault();
		setSearch(value);
	};

	return (
		<header className='Searchbar'>
			<form className='SearchForm' onSubmit={submitForm}>
				<button type='submit' className='SearchForm-button'>
					<span className='SearchForm-button-label'>Search</span>
				</button>

				<input
					className='SearchForm-input'
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					autoComplete='off'
					autoFocus
					placeholder='Search images and photos'
				/>
			</form>
		</header>
	);
};

export default Searchbar;

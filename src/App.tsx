import React, { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
	const [search, setSearch] = useState('');
	const [arrSeacrh, setarrSeacrh]: any = useState([]);
	const [page, setPage] = useState(1);
	const [loader, setLoader] = useState(false);
	const [show, setShow] = useState(false);
	const [imgUrl, setimgUrl] = useState('');

	useEffect(() => {
		if (search) {
			setPage(1);
			fetchData();
		}
	}, [search]);

	const fetchData = () => {
		fetch(
			`https://pixabay.com/api/?q=${search}&page=${1}&key=23621086-6a0039fa8e2aa7a5a3888b987&image_type=photo&orientation=horizontal&per_page=12`
		)
			.then((data) => {
				setLoader(true);
				return data.json();
			})
			.then((res) => setarrSeacrh(res.hits))
			.catch((e) => console.log(e))
			.finally(() => setLoader(false));
	};

	const fetchMoreData = (page: number) => {
		fetch(
			`https://pixabay.com/api/?q=${search}&page=${page}&key=23621086-6a0039fa8e2aa7a5a3888b987&image_type=photo&orientation=horizontal&per_page=12`
		)
			.then((data) => {
				setLoader(true);
				return data.json();
			})
			.then((res) => setarrSeacrh([...arrSeacrh, ...res.hits]))
			.catch((e) => console.log(e))
			.finally(() => setLoader(false));
	};

	const onChangePage = () => {
		const newPage = page + 1;
		setPage(newPage);
		fetchMoreData(newPage);
	};

	const renderModal = (item: string) => {
		setShow(true);
		setimgUrl(item);
	};

	const closeModal = () => {
		setShow(false);
		setimgUrl('');
	};

	const modal = () => {
		return <Modal url={imgUrl} closeModal={closeModal} />;
	};

	return (
		<div>
			<Searchbar setSearch={setSearch} />

			{loader ? (
				<Loader />
			) : (
				arrSeacrh.length > 0 && (
					<ImageGallery renderModal={renderModal} arrSeacrh={arrSeacrh} />
				)
			)}

			{arrSeacrh.length > 0 && <Button onChangePage={onChangePage} />}

			{show && modal()}
		</div>
	);
}

export default App;

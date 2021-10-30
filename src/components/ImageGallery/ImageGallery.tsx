import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './imageGallery.scss';

type test = {
	id: number;
	largeImageURL: string;
};

const ImageGallery = ({ arrSeacrh, renderModal }: any) => {
	return (
		<ul className='ImageGallery'>
			{arrSeacrh.map(({ id, largeImageURL }: test) => (
				<ImageGalleryItem
					key={id}
					renderModal={renderModal}
					largeImageURL={largeImageURL}
				/>
			))}
		</ul>
	);
};

export default ImageGallery;

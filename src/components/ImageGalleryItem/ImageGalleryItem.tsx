import React, { FC } from 'react';
import './imageGalleryItem.scss';

interface IProps {
	largeImageURL: string;
	renderModal: (item: string) => void;
}

const ImageGalleryItem: FC<IProps> = ({ largeImageURL, renderModal }) => {
	return (
		<li className='ImageGalleryItem' onClick={() => renderModal(largeImageURL)}>
			<img
				src={largeImageURL}
				alt={largeImageURL}
				className='ImageGalleryItem-image'
			/>
		</li>
	);
};

export default ImageGalleryItem;

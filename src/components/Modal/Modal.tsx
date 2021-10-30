import React, { useEffect } from 'react';
import './modal.scss';

interface IProps {
	url: string;
	closeModal: () => void;
}

const Modal = ({ url, closeModal }: any) => {
	useEffect(() => {
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				closeModal();
			}
		});
	}, []);

	return (
		<div className='Overlay' onClick={closeModal}>
			<div className='Modal'>
				<img src={url} alt='' />
			</div>
		</div>
	);
};

export default Modal;

import { useEffect, useRef } from 'react';
import { Container } from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Modal = ({ setIsModal, isModal, modalData }) => {
	const modalRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				setIsModal(!isModal);
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [isModal, setIsModal]);

	return (
		<Container>
			<div ref={modalRef} className="modal--content">
				<div className="close" onClick={() => setIsModal(!isModal)}>
					<AiOutlineClose size={25} color="white" />
				</div>
				<img src={modalData.media[0].thumbnail} alt={modalData.title} />
				<div className="content">
					<div className="header">
						<h1>{modalData.title}</h1>
						<div>
							<p>
								<span> {modalData.contractMetadata.openSea.collectionName}</span>
							</p>
							<span className="tag">{modalData.contractMetadata.openSea.floorPrice} </span>
						</div>
					</div>

					<div className="description">
						<h4>Description</h4>
						<p>{modalData.description}</p>
					</div>
					<Link to={`https://opensea.io/assets/ethereum/${modalData.contract.address}/`} target="_blank">
						<button>Buy NFT</button>
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default Modal;

import React from 'react';
import { Container } from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Modal = ({ setIsModal, isModal, modalData }) => {
	return (
		<Container>
			<div className="modal--content">
				<div className="close" onClick={() => setIsModal(!isModal)}>
					<AiOutlineClose size={25} color="white" />
				</div>
				<img src={modalData.image} alt="/" />
				<div className="content">
					<div className="header">
						<h1>{modalData.title}</h1>
						<div>
							<p>
								By {''}
								<Link to="https://opensea.io/ArtGodwinking/created">
									<span> {modalData.owner}</span>
								</Link>
							</p>
							<span className="tag">{modalData.price}</span>
						</div>
					</div>

					<div>
						<h4>Description</h4>
						<p>{modalData.description}</p>
					</div>
					<Link to={modalData.link}>
						<button>Buy NFT</button>
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default Modal;

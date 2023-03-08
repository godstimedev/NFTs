import { useState } from 'react';
import NftCard from '../../components/Card';
import Modal from '../../utilities/Modal';
import { Container } from './styles';
import nfts from '../../constants/nftData';

const NftDetails = () => {
	const [isModal, setIsModal] = useState(false);
	const [modalData, setModalData] = useState({});

	const handleClick = (item) => {
		setModalData(item);
		setIsModal(!isModal);
	};

	return (
		<Container>
			{isModal && <Modal modalData={modalData} isModal={isModal} setIsModal={setIsModal} />}
			<h1>Explore NFTs</h1>
			<div className="grid--container">
				{nfts.map((item, index) => (
					<div key={index} className="card" onClick={() => handleClick(item)}>
						<NftCard
							title={item.title}
							image={item.image}
							short={item.short_description}
							price={item.price}
						/>
					</div>
				))}
			</div>
		</Container>
	);
};

export default NftDetails;

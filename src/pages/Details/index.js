import { useEffect, useState } from 'react';
import NftCard from '../../components/Card';
import Modal from '../../utilities/Modal';
import { Container } from './styles';
import axios from 'axios';

const NftDetails = () => {
	const [isModal, setIsModal] = useState(false);
	const [modalData, setModalData] = useState({});
	const [data, setData] = useState([]);
	const [address, setAddress] = useState('');
	const [ownerAddress, setOwnerAddress] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleClick = (item) => {
		setModalData(item);
		setIsModal(!isModal);
	};

	const handleChange = (e) => {
		setAddress(() => e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setOwnerAddress(() => address);
	};

	const url = `https://eth-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_API_KEY}/getNFTs/?owner=${ownerAddress}`;
	console.log(url);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios(url);
				setLoading(false);
				setError(null);
				setData(res.data.ownedNfts);
			} catch (error) {
				setLoading(false);
				setError(error.response.data);
			}
		};
		fetchData();
	}, [handleSubmit, url]);

	return (
		<Container>
			{isModal && <Modal modalData={modalData} isModal={isModal} setIsModal={setIsModal} />}
			<h1>Explore NFTs</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="adress">Enter Address :</label>{' '}
					<input type="text" value={address} onChange={(e) => handleChange(e)} />
				</div>
				<button type="submit" onClick={handleSubmit}>
					View Collections
				</button>
			</form>
			{loading && <p className="loading">Loading....</p>}
			{error && <p className="error">{error}</p>}
			{
				<div className="grid--container">
					{data &&
						data.map((item, index) => (
							<div key={index} className="card" onClick={() => handleClick(item)}>
								<NftCard
									title={item?.title}
									image={item?.media[0].thumbnail}
									short={item?.description}
									price={item?.contractMetadata?.openSea?.floorPrice}
								/>
							</div>
						))}
				</div>
			}
		</Container>
	);
};

export default NftDetails;

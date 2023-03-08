import React from 'react';
import { Container } from './styles';

const NftCard = ({ title, image, short, price }) => {
	return (
		<Container>
			<img src={image} alt={title} />
			<div className="details">
				<div>
					<h3>{title}</h3>
					<div className="price">
						<span className="tag">{price}</span>
					</div>
				</div>
				<p>{short}</p>
			</div>
		</Container>
	);
};

export default NftCard;

import styled from 'styled-components';

export const Container = styled.div`
	background-color: #4d4d4d;
	width: 300px;
	height: 400px;
	border-radius: 10px;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
	padding: 1rem;
	cursor: pointer;
	:hover {
		scale: 1.02;
		transition: scale 0.2s ease-in-out;
		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
		border-right: 1px solid white;
		transition: border 0.2s linear;
	}

	> img {
		width: 100%;
		height: 60%;
		object-fit: contain;
		:hover {
			scale: 1.1;
			transition: scale 0.2s ease-in-out;
		}
	}

	.details {
		height: 40%;
		margin-top: 0.8rem;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		overflow: hidden;

		> div {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.price {
				display: flex;
				gap: 0.5rem;
				.tag {
					background-color: #333;
					padding: 0.4rem;
					border-radius: 5px;
					font-size: 0.8rem;
					font-weight: 500;
				}
			}
		}
		p {
			height: 100%;
			white-space: wrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin-bottom: 1rem;
		}
	}
`;

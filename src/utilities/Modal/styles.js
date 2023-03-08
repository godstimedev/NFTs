import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	display: grid;
	place-items: center;
	backdrop-filter: blur(10px);
	top: 0;
	left: 0;
	z-index: 20;
	width: 100%;
	height: 100vh;
	@media (max-width: 960px) {
		place-items: center;
	}

	.modal--content {
		position: relative;
		background-color: #555;
		width: 70%;
		height: 65%;
		border-radius: 5px;
		padding: 1.5rem;
		color: #fff;
		display: flex;
		align-items: center;
		gap: 1.5rem;
		@media (max-width: 960px) {
			flex-direction: column;
			width: 80%;
			height: fit-content;
			padding: 1rem;
			gap: 0.7rem;
			align-self: flex-end;
		}
		@media (max-width: 560px) {
			width: 100%;
			height: fit-content;
			padding: 0.7rem;
		}

		img {
			/* flex: 1; */
			border-radius: 5px;
			min-width: 40%;
			height: 100%;
			object-fit: cover;
			@media (max-width: 960px) {
				width: 100%;
				height: 30vh;
				object-fit: contain;
			}
		}

		.close {
			position: absolute;
			right: 0;
			top: -2rem;
			cursor: pointer;
		}

		.content {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			@media (max-width: 560px) {
				gap: 1rem;
			}

			.header {
				h1 {
					margin-top: 0;
				}
				> div {
					display: flex;
					justify-content: space-between;
					align-items: center;

					span {
						width: fit-content;
						background-color: #333;
						padding: 0.5rem;
						border-radius: 5px;
						font-size: 1rem;
						font-weight: 700;
					}
				}
			}

			button {
				cursor: pointer;
				width: fit-content;
				padding: 1rem;
				border-radius: 10px;
				border: none;
				background-color: #f4f4f4;
				font-weight: 600;
				font-size: 1rem;
				@media (max-width: 960px) {
					max-width: auto;
					width: 100%;
					margin-bottom: 0.5rem;
				}

				:hover {
					background: #333;
					transition: 0.3s ease-in;
					color: #fff;
				}
			}
		}
	}
`;

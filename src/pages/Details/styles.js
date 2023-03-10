import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: #333;
	padding: 2rem 4.5rem;
	@media (max-width: 1024px) {
		padding: 2rem;
	}

	> .loading {
		color: white;
		font-size: 1rem;
		text-align: center;
	}
	> .error {
		color: crimson;
		font-size: 1rem;
		text-align: center;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 1.5rem;

		div {
			display: flex;
			align-items: center;
			gap: 1rem;
			@media (max-width: 460px) {
				flex-direction: column;
			}

			input {
				border: none;
				outline: none;
				border-radius: 5px;
				padding: 0.5rem 0.7rem;
			}
		}

		button {
			padding: 0.5rem 1.5rem;
			border: none;
			outline: none;
			background-color: #f4f4f4;
			cursor: pointer;
			font-size: 0.9rem;
			font-weight: 500;
		}
	}

	h1 {
		font-weight: bold;
		text-align: center;
		margin: 1.5rem 0;
	}

	> .grid--container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
		gap: 1rem;

		@media (max-width: 1024px) {
			grid-template-columns: 1fr 1fr;
		}

		@media (max-width: 720px) {
			grid-template-columns: 1fr;
		}

		.card {
			margin-top: 1rem;
			width: fit-content;
		}
	}
`;

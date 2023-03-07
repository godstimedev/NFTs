import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: #333;
	padding: 2rem 4.5rem;
	@media (max-width: 1024px) {
		padding: 2rem;
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

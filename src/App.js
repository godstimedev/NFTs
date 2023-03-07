import { BrowserRouter } from 'react-router-dom';
import { NftDetails } from './pages';

function App() {
	return (
		<div>
			<BrowserRouter>
				<NftDetails />
			</BrowserRouter>
		</div>
	);
}

export default App;

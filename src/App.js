import './App.css';
import Body from './landing-page/body/Body';

function App() {
	return (
		<div className="App">
			<p>Blockchain Explorer</p>
			<div className="landing-search">
				<SearchBar />
			</div>
			<Body />
		</div>
	);
}

export default App;

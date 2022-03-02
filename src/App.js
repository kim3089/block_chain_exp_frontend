import './App.css';
import Body from './landing-page/body/Body';
import SearchBar from './landing-page/header/SearchBar';
import Footer from './landing-page/footer/Footer';
function App() {
	return (
		<div className="App">
			<p>Blockchain Explorer</p>
			<div className="landing-search">
				<SearchBar />
			</div>
			<Body />
			<Footer />
		</div>
	);
}

export default App;

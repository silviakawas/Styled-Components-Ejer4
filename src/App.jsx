import { GlobalStyles } from "./styles/GlobalStyles";
import Calculator from "./components/calculator/Calculator";

const App = () => {
	return (
		<>
			<GlobalStyles/>
			<div className="container">
				<div className="containerCalculator">
					<Calculator/>
				</div>
			</div>
		</>
		
	);
};

export default App;

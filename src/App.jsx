import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Interiors from "./Pages/Interiors.jsx";
import SmartBuildings from "./Pages/SmartBuildings.jsx";
import Architecture from "./Pages/Architecture.jsx";
import Contact from "./Pages/Contact.jsx";
import Error from "./Pages/Error.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
	return (
		<ReactFullpage.Wrapper>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/interiors" component={Interiors} />
					<Route path="/smart-buildings" component={SmartBuildings} />
					<Route path="/architecture" component={Architecture} />
					<Route path="/contact" component={Contact} />
					<Route path="/" component={Error} />
				</Switch>
				<Footer />
			</Router>
		</ReactFullpage.Wrapper>
	);
}

export default App;

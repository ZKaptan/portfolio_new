import Navbar from "./components/Navbar";
import About from "./components/About";
import Technolgy from "./components/Technolgy";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<Navbar />
			<About />
			<Technolgy />
			<Projects />
			<Contact />
			<Footer />
		</Fragment>
	);
}

export default App;

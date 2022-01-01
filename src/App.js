import Navbar from "./components/Navbar";
import About from "./components/About";
import Technolgy from "./components/Technolgy";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<Navbar />
			<About />
			<Technolgy />
			<ToastContainer autoClose={4000} pauseOnFocusLoss={false} />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/navbar/Footer";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

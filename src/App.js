import logo from './logo.svg';
import './App.css';
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/navbar/Footer";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from './component/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch >
        <Route path={["/","/About","/my-portfolio"]} component={About} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

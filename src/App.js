import "./App.css";
import { BrowserRouter as Router, Routes, Route } from
"react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Navbar from "./Navbar";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import BallvalvePage from "./Pages/BallValve";
import CheckvalvePage from "./Pages/CheckValve";
import ButterflyvalvePage from "./Pages/ButterflyValve";

function App() {
return (
<div className="App">
<Router>
  <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Contacts" element={<Contacts />}/>
      <Route path="/BallValve" Component={BallvalvePage}/>
      <Route path="/CheckValve" Component={CheckvalvePage}/>
      <Route path="/ButterflyValve" Component={ButterflyvalvePage}/>
    </Routes>
   
</Router>
</div>
);
}
export default App;
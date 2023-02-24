import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OpenCircuitTest from './components/open-circuit';
import ShortCircuitTest from './components/short-circuit';
import Navbar from './components/navbar';

function Hello() {
  return (
    <div>
      <h1>Welcome to the Open Circuit & Short Circuit Calculator</h1>
      <div className="home-text">
        <p>This Simple Application allows you to conviniently calculate the outcomes of open circuit and closed circuit test of a 11kV/415V, 2500 kVA Transformer utilizing the readings. This Project is made by</p>
          <ul className="name-list">
            <li>{"Prateek Srivastava (192007)"}</li>
            <li>{"Shivam Sagar (192009)"}</li>
            <li>{"Kushal Suri (192005)"}</li>
            <li>{"Dhruv Aggarwal (192073)"}</li>
            <li>{"Ritika Lohia (192042)"}</li>
          </ul>
      </div>
      
    </div>
  );
}



export default function App() {
  return (
  <>
  <Router>
  <Navbar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/open-circuit" element={<OpenCircuitTest />} />
        <Route path="/closed-circuit" element={<ShortCircuitTest />} />
      </Routes>
    </Router>
  </>
    
  );
}

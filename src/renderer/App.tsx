import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OpenCircuitTest from './components/open-circuit';
import ShortCircuitTest from './components/closed-circuit';
import Navbar from './components/header';

function Hello() {
  return (
    <div>
      <h1>Welcome to the Open Circuit & Short Circuit Calculator</h1>
      <h4>{"This Simple Application allows you to conviniently calculate the outcomes of open circuit and closed circuit test utilizing the readings. This Project is made by Prateek Shrivastava(192007), Shivam Sagar(192009), Kushal Suri(192005), Dhruv Aggarwal(192073), Ritika Lohia(192063)"}</h4>
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

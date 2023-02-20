import { Link } from "react-router-dom";


const Navbar = ()=>{
    return (
        <div className="navbar">
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/open-circuit">Open Circuit Test</Link></h3>
            <h3><Link to="/closed-circuit">Short Circuit Test</Link></h3>
        </div>
    )
}

export default Navbar;
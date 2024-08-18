import { Link } from "react-router-dom";
import './App.css';

function Navbar() {
return (
<div className='abc'>
<div>
<img  alt="" src="https://www.shaktivijayvalves.com/images/index_01.jpg"/>
</div>
<div>
<Link className="xyz" to="/"> Home </Link>
</div>
</div>
);
}

export default Navbar;
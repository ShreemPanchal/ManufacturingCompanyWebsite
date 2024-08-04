import { Link } from "react-router-dom";
import './App.css';
import svvalves from './Pages/svvalves.jpg';

function Navbar(){
  return (
    <div className='navbar' >
      <div id='logo' style={{
       
      }}>
        <img alt="shree shakti vijay" height="90px" width="90px" src={svvalves} style={{
          borderRadius: '10px',
          marginRight: '10px'
        }} />
        <h1 style={{
          marginLeft: '10px',
          color: 'white',
          whiteSpace: 'nowrap',
          zIndex: 1,
          fontSize: '40px',
          fontWeight: 'bold',
          fontFamily:'Open Sans, sans-serif,cursive'
        }}>Shree Shaktivijay Engineering Works</h1>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link className="xyz" to="/" style={{
          
        }}> Home </Link>
        <Link className="xyz" to="/Product" style={{
          color: 'white',
          textDecoration: 'none',
          marginRight: '20px'
        }}> Products </Link>
        <Link className="xyz" to="/About" style={{
          color: 'white',
          textDecoration: 'none',
          marginRight: '20px'
        }}> About Us </Link>
        <Link className="xyz" to="/Contacts" style={{
          color: 'white',
          textDecoration: 'none'
        }}> Contact us </Link>
      </div>
    </div>
  );
};

export default Navbar;
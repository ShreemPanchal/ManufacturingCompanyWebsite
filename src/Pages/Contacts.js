import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Contacts(){
  return(
    <div className='contacts' >
       <div className="contact" style={{backgroundColor:'whitesmoke',padding:'40px' }}>
        <h2 style={{ fontSize: '36px', color: '#333', margin: '20px 0' }}>Get in Touch</h2>
        <p style={{ fontSize: '18px', color: '#666', margin: '20px 0' }}>Contact us for more information about our products and services.</p>
        <div style={{ display: 'flex', justifyContent: 'pace-between' }}>
          <form style={{ width: '40%', marginRight: '20px', marginLeft:'20px' }}>
            <input type="text" placeholder="Name" style={{ padding: '10px', margin: '10px 0', width: '100%', backgroundColor: '#f7f7f7', border: '1px solid #ddd' }} />
            <input type="email" placeholder="Email" style={{ padding: '10px', margin: '10px 0', width: '100%', backgroundColor: '#f7f7f7', border: '1px solid #ddd' }} />
            <textarea placeholder="Message" style={{ padding: '10px', margin: '10px 0', width: '100%', backgroundColor: '#f7f7f7', border: '1px solid #ddd' }} />
            <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Send Message</button>
          </form>
          <div className="map" style={{ width: '50%', height: '100px', marginLeft: '20px'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.823144144144!2d72.566744!3d23.033333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd331%3A0x4fcedc6b6f6f6f6f!2s123%2C%20Industrial%20Estate%2C%20Ahmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1643723431341!5m2!1sen!2sin" width="100%" height="200%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
        <div className="contact-info" >
          <p style={{ fontSize: '18px', color: '#666', margin: '10px 0' }}>
            <a href="tel:+91 99999 99999" style={{ textDecoration: 'none', color: '#666' }}>Phone: +91 9999999999</a>
          </p>
          <p style={{ fontSize: '18px', color: '#666', margin: '10px 0' }}>
            <a href="mailto:info@shreeshaktivijayvalves.com" style={{ textDecoration: 'none', color: '#666' }}>Email: info@shreeshaktivijayvalves.com</a>
          </p>
          <p style={{ fontSize: '18px', color: '#666', margin: '10px 0' }}>
            <a href="https://www.google.com/maps/place/123,+Industrial+Estate,+Ahmedabad,+Gujarat,+India" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#666' }}>Address: 123, Industrial Estate, Ahmedabad, Gujarat, India</a>
          </p>
        </div>
      </div>
    {/* Footer Section */}
    <div className="footer" style={{
        backgroundColor: '#333',
        padding: '40px 0',
        color: 'white',
        overflow:'hidden'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 100px'
        }}>
          <div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                marginBottom: '10px',
                fontSize:'30px'
              }}>Products</li>
              <li><a href="/BallValve" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize:'20px'
              }}>Ball valve</a></li>
              <li><a href="/check-valve" style={{
                color: 'white',
                textDecoration: 'none',
                 fontSize:'20px'
              }}>Check Valve</a></li>
              <li><a href="/butterfly-valve" style={{
                color: 'white',
                textDecoration: 'none',
                 fontSize:'20px'
              }}>Butterfly Valve</a></li>
            </ul>
          </div>
          <div>
            <p style={{
              marginBottom: '10px',
              fontSize:'30px'
            }}>Contact Us</p>
            <p style={{ fontSize:'20px'}}>+91 09887 76544</p>
            <p style={{ fontSize:'20px'}}>info@shreeshaktivijayvalves.com</p>
          </div>
          <div>
            <p style={{
              marginBottom: '10px',
              fontSize:'30px'
            }}>Follow Us</p>
            <div style={{
              display: 'flex'
            }}>
              <FaInstagram style={{
                fontSize: '25px',
                marginRight: '10px'
              }} />
              <FaWhatsapp style={{
                fontSize: '25px',
                marginRight: '10px'
              }} />
              <FaTwitter style={{
                fontSize: '25px'
              }} />
            </div>
          </div>
        </div>
        <p style={{
          fontSize: '20px',
          textAlign: 'center',
          margin: '20px 0'
        }}>&copy; 2023 Shree Shakti Vijay Engineering Works. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Contacts;
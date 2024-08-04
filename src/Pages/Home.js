import React from 'react';
import { FaIndustry, FaQuoteLeft, FaPhone } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container" >
      <div className="hero" style={{
      height: '100vh',
      width:'100vw',
      backgroundColor: '',
     position: '' /* add this */}}
>
        <div className="hero-image"/>
        <div className="hero-overlay" >
          <div className='hero-content' style={{
                  zIndex: 1, /* add this */ marginTop:'-25%'}}>

          <h1 style={{
            fontSize: '68px',
            fontStyle:'Montserrat',
            color:"#F7F7F7",
            fontWeight: 'Semi-bold(1000)',
            marginTop: '20%'
          }}>Welcome to Shree Shakti Vijay Engineering Works</h1>
          <p style={{
            fontSize: '24px',
            fontWeight:'bold',
            color:'white',
            marginTop: '0'
          }}>Leading manufacturer of industrial valves & pipe line products</p>
          <a href="/About">
          <button style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px'
          }}>Learn More</button></a>
          </div>
          <div className="stats" style={{ display: 'flex',position:'absolute', justifyContent:'space-evenly', width: '100%', padding:'20px', bottom:'-20%', zIndex:1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems:'baseline' }}>
              <FaIndustry size={24} color="white" />
              <p style={{ fontSize: '18px', color: 'white' }}>25+ years of experience</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
              <FaQuoteLeft size={24} color="white" />
              <p style={{ fontSize: '18px', color: 'white' }}>1000+ satisfied customers</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline' }}>
              <FaPhone size={24} color="white" />
              <p style={{ fontSize: '18px', color: 'white' }}>ISO 9001:2015 certified</p>
            </div>
          </div>

        </div>
      </div>

      {/* About Section */}
      <div className="about" style={{
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        zIndex:1
      }}>
        <h2 style={{
          fontSize: '36px',
          color: '#333',
          marginBottom: '20px'
        }}>About Us</h2>
        <p style={{
          fontSize: '18px',
          color: '#666',
          marginBottom: '20px'
        }}>Shree Shakti Vijay valves is a leading manufacturer of industrial valves & pipe line products. We have 25+ years of experience in the industry and have served 1000+ satisfied customers.</p>
        <a href="/About">
        <button style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '18px'
        }}>Read More</button></a>
      </div>

      {/* Services Section */}
      <div className="services" style={{
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{
          fontSize: '36px',
          color: '#333',
          marginBottom: '20px'
        }}>Our Services</h2>
        <div className="service-grid" style={{
          
        }}>
          <div className="service" style={{
            width: '30%',
            margin: '20px',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '24px',
              color: '#333',
              marginBottom: '10px'
            }}>Valve Manufacturing</h3>
            <p style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '10px'
            }}>We manufacture a wide range of industrial valves, including gate valves, globe valves, and check valves.</p>
          </div>
          <div className="service" style={{
            width: '30%',
            margin: '20px',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '24px',
              color: '#333',
              marginBottom: '10px'
            }}>Pipe Line Products</h3>
            <p style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '10px'
            }}>We offer a variety of pipe line products, including pipes, fittings</p>
                      </div>
          <div className="service" style={{
            width: '30%',
            margin: '20px',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '24px',
              color: '#333',
              marginBottom: '10px'
            }}>Repair and Maintenance</h3>
            <p style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '10px'
            }}>We provide repair and maintenance services for industrial valves and pipe line products.</p>
          </div>
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
              <li><a href="/CheckValve" style={{
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
            <p style={{ fontSize:'20px'}}>+91 99999 99999</p>
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

export default Home;
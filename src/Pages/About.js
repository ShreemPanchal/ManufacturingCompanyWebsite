import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className="about-container">
      <div className="hero" style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'grey', // modern blue color
        position: '',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="header" style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#fff',
          textShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
        }}>
          <span style={{ }}></span>
          <br />
          <span style={{  }}></span>
        </div>
        <div className='about-image'/>
        <div className="about-overlay">
          <div className="about-content" style={{
            zIndex: 1,
            marginTop: '-25%'
          }}>
            <h1 style={{
              fontSize: '68px',
              fontStyle:'Montserrat',
              color: '#fff', // white color
              fontWeight: 'Semi-bold(1000)',
              marginTop: '20%',
              zIndex:10
            }}>About Shree Shakti Vijay Engineering Works</h1>
            <p style={{ fontSize: '24px', color: '#fff', marginTop: '0' }}>Leading manufacturer of industrial valves & pipe line products</p>
            <a href="#our-story">
              <button style={{
                backgroundColor: '#4CAF50', // modern orange color
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
              }}><i className="fas fa-arrow-right" />Learn More</button>
            </a>
          </div>
        </div>
      </div>
      <div className="about-info" id='our-story' style={{zIndex:10000}}>
        <h1 style={{ fontSize: '56px', color: '#333', margin: '20px 0', }}>Our Story</h1>
        <p style={{ fontSize: '26px', color: '#666', margin: '20px 0' }}>
          Shakti Vijay is an established unit, manufacturing industrial valves & pipe line products for last 25 years. Our valves are used in reputed Chemicals, Pharmaceuticals, Petroleum, Textile, Sugar, Paper industries, Oil, Gas, Steam & other Fluid services. All products are designed, manufactured & guaranted as per international standard specification.
        </p>
        <p style={{ fontSize: '26px', color: '#666', margin: '20px 0' }}>
          We introduce ourselves as one of the leading manufacturers of industrial valves (since last 25 years). The company has built an excellent track record by following the policy of customer satisfaction. Mr. Manish R. Panchal(B.E Production) heads the company.The company has continuously worked to develop innovative and high quality products and has earned a reputation for technical excellence in the valve industry.

          We are able to offer a complete range of valves in various materials of construction in all end connections.
        </p>

        <h2 style={{ fontSize: '26px', color: 'black', margin: '20px 0', fontWeight: 'bold' }}>We manufacture the Valves in materials as shown below:</h2>
        <div>
          <table className="product-table" border='|'>
            <tr>
              <td>Castings :</td>
              <td>Cast Carbon Steel, CF8, CF8M, CF3, CF3M, S.S. Investment Casting, Cast Iron, Gun Metal.</td>
            </tr>
            <tr>
              <td>Solidbar :</td>
              <td>ANSI 304, 310, 304L, 316L Mild Steel, carbon Steel, Monel, etc.</td>
            </tr>
            <tr>
              <td>Castings Material :</td>
              <td>Conforms to relevant ASTM specification castings are sound, well proportioned, defect free, with smooth surface material. Test and other certificates are furnished to the customers.</td>
            </tr>
            <th colSpan='2'>End Connections:</th>
            <tr>
              <td>• BUTT WELD ENDS</td>
              <td>ANSI B 16.25</td>
            </tr>
            <tr>
              <td>• SOCKET WELD ENDS</td>
              <td>ANSI B 16.11</td>
            </tr>
            
            <tr>
              <td>• THREAD ENDS</td>
              <td>B.S.P, B.S.P.T, N.P.T etc.
                End of end connection confirm to ANSI B 16.10</td>
            </tr>
          </table>

          <table className="product-table2" border="|">
            <tr>
              <td  style={{fontSize:'20px', fontWeight:'bold' ,textAlign:'center'}}rowSpan={4}>Testing Parameters</td>
              <td rowSpan={2}>Rating</td>
              <td colSpan={2}> Hydro Test</td>
              <td>Air Test</td>
            </tr>
            <tr>
              <td>Shell</td>
              <td>Sheat</td>
              <td>Sheat</td>
            </tr>
            <tr> 
              <td>150 Class</td>
              <td>425</td>
              <td>300</td>
              <td>80</td>
            </tr>
            <tr> 
              <td>300 Class</td>
              <td>1100</td>
              <td>750</td>
              <td>80</td>
            </tr>
          </table>
          </div>
          <div className="certifications">
            <h2 style={{ fontSize: '24px', color: '#333', margin: '20px 0' }}>Certifications</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                <FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                <span style={{ fontSize: '18px', color: '#666' }}>ISO 9001:2015</span>
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                <FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                <span style={{ fontSize: '18px', color: '#666' }}>CE Marking</span>
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                <FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '24px' }} />
                <span style={{ fontSize: '18px', color: '#666' }}>PED Directive</span>
              </li>
            </ul>
          </div>
          <h4 style={{ fontSize: '36px', color: '#333', margin: '20px 0' }}>At Shaktivijay you do not have to pay a premium for quality!!</h4>
          <div className="faq" style={{
            backgroundColor: '#f7f7f7', // light gray color
            padding: '40px 0',
            margin: '20px 0'
          }}>
            <h2 style={{ fontSize: '24px', color: '#333', margin: '20px 0' }}>Frequently Asked Questions</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#666', fontSize: '24px', marginRight: '10px' }} />
                <span style={{ fontSize: '18px', color: '#666' }}>What is the warranty period for your products?</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#666', fontSize: '24px', marginRight: '10px' }} />
                <span style={{ fontSize: '18px', color: '#666' }}>Do you provide customization options for your products?</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <FontAwesomeIcon icon={faQuestionCircle} style={{ color: '#666', fontSize: '24px', marginRight: '10px' }} />
                <span style={{ fontSize: '18px', color: '#666' }}>What is the lead time for delivery?</span>
              </li>
            </ul>
          </div>
          <div className="footer" style={{
                       backgroundColor: '#333', // dark gray color
                       padding: '20px 0',
                       color: '#fff', // white color
                       textAlign: 'center'
                     }}>
                       <p style={{ fontSize: '18px', margin: '10px 0' }}>
                         Copyright 2023 Shree Shakti Vijay Engineering Works. All Rights Reserved.
                       </p>
                       <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
                         <li style={{ marginRight: '20px' }}>
                           
                             <FontAwesomeIcon icon={['fab', 'facebook']} style={{ fontSize: '24px' }} />
                           
                         </li>
                         <li style={{ marginRight: '20px' }}>
                          
                             <FontAwesomeIcon icon={['fab', 'twitter']} style={{ fontSize: '24px' }} />
                           
                         </li>
                         <li style={{ marginRight: '20px' }}>
                          
                             <FontAwesomeIcon icon={['fab', 'linkedin']} style={{ fontSize: '24px' }} />
                           
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
               
             );
           }
           
           export default About;
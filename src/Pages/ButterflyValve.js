function ButterflyvalvePage() {
  return (
    <div className="ball-container" style={{
      backgroundColor: '#f7f7f7', /* light gray background */
      padding: '20px',
      fontFamily: 'Open Sans, sans-serif'
    }}>
      <div className="ball-type-1" style={{
        display: 'flex',
        padding: '100px',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="grid-element" style={{
          flexBasis: '40%',
          marginRight: '20px'
        }}>
          <h1 style={{
            fontSize: '34px',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>Ball Valves-Single Isolation</h1>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.5',
            color: '#666'
          }}>Our Ball Valve range is available in sizes from 3/8” up to 16”, and pressures up to 15,000psi. Available in either soft or metal seated configuration depending on your process requirements, our high-integrity design has been supplied for many years to customers around the world.</p>
        </div>
        <div style={{
          flexBasis: '40%',
          marginLeft: '20px'
        }}>
          <img src="https://th.bing.com/th/id/OIP.h9PB5aND9GzyRFHAOg_jigHaHa?w=187&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" height="300px" width="70%" alt="" style={{
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
          }} />
        </div>
      </div>
      <div className="type1-details" style={{
        display: 'flex',
        padding: '100px',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          flexBasis: '40%',
          marginRight: '20px'
        }}>
          <h1 style={{
            fontSize: '34px',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>Product Features</h1>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>Metal or soft seated options available</li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>Spring energised seats</li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>Floating and Trunnion options available</li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>Dual Stem seal arrangement</li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>Anti-blow-out Stem</li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>Suitable for manual, ROV or actuator operation</li>
          </ul>
        </div>
        <div className="type1-design" style={{
          flexBasis: '40%',
          marginLeft: '20px'
        }}>
          <h1 style={{
            fontSize: '34px',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>Design Benefits</h1>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>Bi-directional sealing</li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>Compact design</li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>No lubrication or maintenance required</li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666'}}>Easily configured to suit various end connections</li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>PEEK/PTFE soft seals to suit a wide range of process media</li>
            <li style={{
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#666',
              marginBottom: '10px'
            }}>Rate A (zero) leakage options available</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ButterflyvalvePage;
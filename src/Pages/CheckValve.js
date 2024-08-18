function CheckvalvePage() {
  return (
    <div
      className="ball-container"
      style={{
        backgroundColor: "#f7f7f7" /* light gray background */,
        padding: "20px",
        fontFamily: "Open Sans, sans-serif",
      }}
    >
      <div
        className="ball-type-1"
        style={{
          display: "flex",
          padding: "100px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="grid-element"
          style={{
            flexBasis: "40%",
            marginRight: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Check Valves – Piston
          </h1>
          <p
            style={{
              fontSize: "25px",
              lineHeight: "1.5",
              color: "#666",
            }}
          >
            Shkativijay's subsea Piston Check Valve is available from 1/2” to 6”
            and Pressures up to 17,500psi. The valve can also be incorporated
            within needle and gate valves for chemical injection applications.
          </p>
        </div>
        <div
          style={{
            flexBasis: "40%",
            marginLeft: "20px",
          }}
        >
          <img
            src="https://5.imimg.com/data5/RW/UJ/MY-10134674/check-valves-500x500.jpg"
            height="300px"
            width="70%"
            alt=""
            style={{
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </div>
      <div
        className="type1-details"
        style={{
          display: "flex",
          padding: "100px",
          justifyContent: "space-between",
          alignItems: "left",
        }}
      >
        <div
          style={{
            flexBasis: "40%",
            marginRight: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Product Features
          </h1>
          <ul
            style={{
              listStyle: "inherit",
              padding: "0",
              margin: "0",
              alignContent: "left",
              textAlign: "left",
            }}
          >
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              Metal to metal seat sealing with additional Polymeric secondary
              seat seal for bubble tight isolation on gas service and at low
              pressures
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              No requirement for elastomers in process wetted areas
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              Metal seated static body joint. Elastomer variation shown is
              optional
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              API 17D Second Edition qualified
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              2.1/16” Non-hard face variant qualified to 10,000psi. Although API
              6A Annex I only requires to 5,000psi its qualified to 7,500 psi
              qualified
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              2” and larger can be offered c/w hard facing for sand slurry
              applications
            </li>
          </ul>
        </div>
        <div
          className="type1-design"
          style={{
            flexBasis: "40%",
            marginLeft: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Design Benefits
          </h1>
          <ul
            style={{
              listStyle: "initial",
              padding: "0",
              margin: "0",
            }}
          >
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              Bi-directional sealing
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              Compact design
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              No lubrication or maintenance required
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
              }}
            >
              Easily configured to suit various end connections
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              PEEK/PTFE soft seals to suit a wide range of process media
            </li>
            <li
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              Rate A (zero) leakage options available
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CheckvalvePage;

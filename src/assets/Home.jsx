import Homes from "./Home.png";
import { useState, useEffect } from "react";

function Home() {
  const [users, setUsers] = useState(0);
  const [locations, setLocations] = useState(0);
  const [servers, setServers] = useState(0);

  useEffect(() => {
    const userInterval = setInterval(() => {
      setUsers((prev) => {
        if (prev >= 90) {
          clearInterval(userInterval);
          return 90;
        }
        return prev + 1;
      });
    }, 30);

    const locationInterval = setInterval(() => {
      setLocations((prev) => {
        if (prev >= 30) {
          clearInterval(locationInterval);
          return 30;
        }
        return prev + 1;
      });
    }, 50);

    const serverInterval = setInterval(() => {
      setServers((prev) => {
        if (prev >= 50) {
          clearInterval(serverInterval);
          return 50;
        }
        return prev + 1;
      });
    }, 40);

    return () => {
      clearInterval(userInterval);
      clearInterval(locationInterval);
      clearInterval(serverInterval);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="container Home py-2" id="Home">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0 px-4">
            <h1 className="fw-bold">
              Want anything to be easy with <b>LaslesVPN</b>
            </h1>

            <p className="mt-3 text-secondary">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>

            <a href="#" className="btn btn-danger px-5 py-2 shadow mt-3">
              Get Started
            </a>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src={Homes}
              alt="Home"
              className="img-fluid"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="container my-5">
        <div className="row shadow rounded py-4 mx-3">

          {/* Users */}
          <div className="col-lg-4 col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="d-flex justify-content-center align-items-center">
              <i className="bi bi-person-fill counter-icon"></i>
            <div>
                <h3 className="ms-3 fw-bold  mx-3 mb-0 font-weight-bold">{users}+</h3>
               <small className="text-secondary ">Users</small>
            </div>
            </div>
         
          </div>

          {/* Locations */}
          <div className="col-lg-4 col-md-4 col-12 text-center mb-4 mb-md-0">
            <div className="d-flex justify-content-center align-items-center">
              <i className="bi bi-geo-alt-fill counter-icon"></i>
             <div>
               <h3 className="ms-3 fw-bold  mx-3 mb-0 font-weight-bold">{locations}+</h3>
               <small className="text-secondary">Locations</small>
             </div>
            </div>
            
          </div>

          {/* Servers */}
          <div className="col-lg-4 col-md-4 col-12 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <i className="bi bi-server counter-icon"></i>
             <div>
               <h3 className="ms-3 fw-bold mx-3 mb-0 font-weight-bold">{servers}+</h3>
                 <small className="text-secondary ">Servers</small>
             </div>
              
            </div>
          
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
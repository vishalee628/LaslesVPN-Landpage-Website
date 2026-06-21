import second from "./second.png";
import tick from "./tick.png";

function Features() {
  return (
    <>
      <div className="container py-5" id="Features">
        <div className="row align-items-center">

          {/* Image Section */}
          <div className="col-lg-6 col-md-12 text-center mb-5 mb-lg-0">
            <img
              src={second}
              alt="Features"
              className="img-fluid"
              style={{ maxWidth: "500px" }}
            />
          </div>

          {/* Content Section */}
          <div className="col-lg-6 col-md-12">
            <h2 className="fw-bold mb-3">
              We Provide Many Features You Can Use
            </h2>

            <p className="text-secondary mb-4">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>

            <div className="feature-item">
              <img src={tick} alt="" />
              <p>Powerfull online protection.</p>
            </div>

            <div className="feature-item">
              <img src={tick} alt="" />
              <p>Internet without borders.</p>
            </div>

            <div className="feature-item ">
              <img src={tick} alt="" />
              <p>Supercharged VPN.</p>
            </div>

            <div className="feature-item">
              <img src={tick} alt="" />
              <p>No specific time limits.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Features;
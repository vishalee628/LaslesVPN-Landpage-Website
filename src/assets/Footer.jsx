import Logo from "./Logo.png";

function Footer() {
  return (
    <footer className="Footer py-5">
      <div className="container">
        <div className="row gy-4">

          {/* Left Side */}
          <div className="col-lg-6 col-md-12">
            <div className="d-flex align-items-center mb-3">
              <img src={Logo} alt="" width="30" height="30" />
              <h5 className="ms-3 mb-0 mx-2">
                Lasles<b>VPN</b>
              </h5>
            </div>

            <p className="text-secondary">
              LaslesVPN is a private virtual network that has unique features
              and has high security.
            </p>

            <div className="icons mb-3">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </div>

            <p className="text-secondary">
              ©2020 LaslesVPN
            </p>
          </div>

          {/* Product */}
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="fw-bold mb-3">Product</h6>

            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Server</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>

          {/* Engage */}
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="fw-bold mb-3">Engage</h6>

            <p>LaslesVPN ?</p>
            <p>FAQ</p>
            <p>Tutorials</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>

          {/* Earn Money */}
          <div className="col-lg-2 col-md-4 col-12">
            <h6 className="fw-bold mb-3">Earn Money</h6>

            <p>Affiliate</p>
            <p>Become Partner</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
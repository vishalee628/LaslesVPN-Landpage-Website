import Map from "./map.png";
import Netflix from "./Netflix.jpeg";
import Amazon from "./Amazon.jpeg";
import Spotify from "./Spotify.jpeg";
import Google from "./Google.jpeg";

function Testimonials() {
  return (
    <>
      <section className="container py-5" id="Testimonials">
        <div className="text-center">
          <h1 className="fw-bold">
            Huge Global Network of Fast VPN
          </h1>

          <p className="text-secondary mt-3">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>

          {/* Map */}
          <img
            src={Map}
            alt="Map"
            className="img-fluid my-5"
          />
        </div>

        {/* Brand Marquee */}
        <div className="marquee-container mt-4">
          <div className="marquee-content rounded">
            <img src={Netflix} alt="Netflix" />
            <img src={Amazon} alt="Amazon" />
            <img src={Google} alt="Google" />
            <img src={Spotify} alt="Spotify" />

            {/* Duplicate for infinite scroll */}
            <img src={Netflix} alt="Netflix" />
            <img src={Amazon} alt="Amazon" />
            <img src={Google} alt="Google" />
            <img src={Spotify} alt="Spotify" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
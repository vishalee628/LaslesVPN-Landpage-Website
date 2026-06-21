import { useEffect, useState } from "react";
import Logo from "./Logo.png";

function Navbar() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "Home",
        "Features",
        "Pricing",
        "Testimonials",
        "Help",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#Home">
          <img src={Logo} alt="" width="25" />
          <span className="Logo ml-2  font-weight-bolder">LaslesVPN</span>
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">

            <li className="nav-item mr-3">
              <a className={`nav-link ${active === "Home" ? "active" : ""}`} href="#Home">
                Home
              </a>
            </li>

            <li className="nav-item mr-3">
              <a className={`nav-link ${active === "Features" ? "active" : ""}`} href="#Features">
                Features
              </a>
            </li>

            <li className="nav-item mr-3">
              <a className={`nav-link ${active === "Pricing" ? "active" : ""}`} href="#Pricing">
                Pricing
              </a>
            </li>

            <li className="nav-item mr-3">
              <a className={`nav-link ${active === "Testimonials" ? "active" : ""}`} href="#Testimonials">
                Testimonials
              </a>
            </li>

            <li className="nav-item">
              <a className={`nav-link ${active === "Help" ? "active" : ""}`} href="#Help">
                Help
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
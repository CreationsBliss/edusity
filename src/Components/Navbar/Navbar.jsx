import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setMenu(true) : setMenu(false);
    });
  }, []);

  return (
    <nav className={`container ${menu ? "main-menu" : " "}`}>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          {" "}
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          {" "}
          <Link to="testimonial" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          {" "}
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

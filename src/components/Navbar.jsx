import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close, linkedin, github, leetcode } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "bg-primary" : "text-white"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a
                  className={`${scrolled ? "nav-menu-primary" : "text-white"}`}
                  href={`#${nav.id}`}
                //   download={`${nav.download && nav.download}`}
                //   target={`${nav.target ? nav.target : false}`}
                //   to={`${nav.to}`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </Link>

        <ul className=" flex flex-row justify-between items-start gap-4">
          <li className="font-poppins font-medium cursor-pointer text-[16px]">
            <a
              href="https://www.linkedin.com/in/tavita-menashe/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={`${
                  scrolled
                    ? "nav-social-media nav-social-media--black"
                    : "nav-social-media"
                }`}
                src={linkedin}
                alt="linkedin"
              />
            </a>
          </li>
          <li className="font-poppins font-medium cursor-pointer text-[16px]">
            <a
              href="https://github.com/tavigul/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={`${
                  scrolled
                    ? "nav-social-media nav-social-media--black"
                    : "nav-social-media"
                }`}
                src={github}
                alt="github"
              />
            </a>
          </li>
          <li className="font-poppins font-medium cursor-pointer text-[16px]">
            <a
              href="https://leetcode.com/Tavita/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={`${
                  scrolled
                    ? "nav-social-media nav-social-media--black"
                    : "nav-social-media"
                }`}
                src={leetcode}
                alt="leetcode"
              />
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

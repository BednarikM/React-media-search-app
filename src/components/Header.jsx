import { useState, useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";

import { MediaGenresContext } from "../context/MediaGenresContext.jsx";
import { PaginationContext } from "../context/PaginationContext.jsx";

import SearchInput from "../components/SearchInput.jsx";
import SvgIcon from "../components/SvgIcon.jsx";

import "../styles/components/Header.scss";

export default function Header({ heading }) {
  const { validMediaGenres } = useContext(MediaGenresContext);
  const { setCurrentPageState } = useContext(PaginationContext);

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const headerRef = useRef(null);
  const navLinks = [...validMediaGenres, "favorites"];

  function toggleMenu() {
    setIsMobileMenuOpened((open) => !open);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 950 && isMobileMenuOpened) {
        setIsMobileMenuOpened(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpened]);

  return (
    <div className="header" ref={headerRef}>
      <div className="header__content">
        <div className="header__title-container">
          <span className="header__title">{heading}</span>
        </div>
        <div
          className={`header__menu ${
            isMobileMenuOpened ? "header__menu--is-opened" : ""
          }`}
        >
          <SearchInput />
          <ul className="header__nav-link-list">
            {navLinks.map((genre) => {
              return (
                <NavLink
                  key={genre}
                  to={`/${genre}`}
                  className={({ isActive }) =>
                    `header__nav-link ${
                      isActive ? "header__nav-link--active" : ""
                    }`
                  }
                  onClick={() => setCurrentPageState(1)}
                >
                  <span className="header__nav-link-text">{genre}</span>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <SvgIcon
          className="header__svg-hamburger-menu"
          iconName={`${isMobileMenuOpened ? "chevron-left" : "hamburger-menu"}`}
          handleIconClick={toggleMenu}
        />
      </div>
    </div>
  );
}

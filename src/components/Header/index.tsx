import { useState } from "react";
import { Moon, Sun, List } from "@phosphor-icons/react";
import { Link } from "react-scroll";
import * as S from "./style";

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [activeSection, setActiveSection]= useState("")

  const toogleMenu = () => {
    setMenuMobile(!menuMobile);
  };

  const handleSetActive = (to:string)=>{
    setActiveSection(to)
  }

  return (
    <S.Header>
      <nav className="nav">
        <p className="name">
          <span>[</span>Diego<span>]</span>
        </p>
        <div className={`nav-menu ${menuMobile ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              {" "}
              <Link
                className={`nav-link ${activeSection === "Home" ? "active-link" : ""}`}
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onSetActive={handleSetActive}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${activeSection === "About" ? "active-link" : ""}`}
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onSetActive={handleSetActive}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${activeSection === "Skills" ? "active-link" : ""}`}
                to="Skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onSetActive={handleSetActive}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${activeSection === "Work" ? "active-link" : ""}`}
                to="Work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                onSetActive={handleSetActive}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${activeSection === "Contact" ? "active-link" : ""}`}
                to="Contact"
                spy={true}
                smooth={true}
                offset={-200}
                duration={100}
                onSetActive={handleSetActive}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <S.ContentMobile onClick={toogleMenu}>
          <List size="20" weight="bold"/>
        </S.ContentMobile>

        <S.ThemeChange>
          <div className="navs-btns">
            <Moon size="20" />
          </div>

          <div className="sun">
            <Sun size="20" />
          </div>
        </S.ThemeChange>
      </nav>
    </S.Header>
  );
};



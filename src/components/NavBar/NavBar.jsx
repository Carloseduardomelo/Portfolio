
import logo01 from "../../assets/logo 1.svg";

import { NavLink } from "react-router-dom";

import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={style.DivAll}>
      <section className={style.SectionLogo}>
        <img src={logo01} alt="" />
        <h1>carlos</h1>
      </section>
      <section className={style.SectionLink}>
        <NavLink to={"/@"}>About Me</NavLink>
        <NavLink to={"/@"}>Skkils</NavLink>
        <NavLink to={"/@"}>Projects</NavLink>
        <NavLink to={"/@"}>Contact ME</NavLink>
      </section>
      <section className={style.curso}>
        <button type="button" className={style.SectionButton}>
          Resumo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="black"
            className={style.svg}
          >
            <path
              d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={style.svg} 
            />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default NavBar;

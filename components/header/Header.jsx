import { Link } from "react-router-dom";
import css from "./Header.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18next";

export default function Header() {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  return (
    <div className={css.sticky}>
      <div className="container">
        <div className={css.header}>
          <div className={css.header_body}>
            <Link to="/" className={css.logo}>
              <img src="/images/header/logo.png" alt="Logo" />
            </Link>
            <div className={css.burger_border}>
              <div className={css.header_burger} onClick={() => setActive(!active)}>
                <span></span>
              </div>
            </div>
            <nav className={css.header_menu}>
              <ul className={css.header_list}>
                <li>
                  <a href="#" className={css.header_link}>
                    {t("header.features")}
                  </a>
                </li>
                <li>
                  <a href="#" className={css.header_link}>
                    {t("header.SignUp")}
                  </a>
                </li>
                <li>
                  <Link to="/login" className={css.header_link_with_background}>
                    {t("header.SignIn")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <hr className={css.hr}></hr>
        </div>
      </div>
      {active && (
        <nav className={css.header_menu_active}>
          <ul className={css.header_list_active}>
            <li>
              <a href="#" className={css.header_link}>
                Features
              </a>
            </li>
            <li>
              <a href="#" className={css.header_link}>
                Sign Up
              </a>
            </li>
            <li>
              <Link to="/" className={css.header_link_with_background}>
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

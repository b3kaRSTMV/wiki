import { Link, useNavigate } from "react-router-dom";
import css from "./LoginPage.module.scss";
import { useTranslation } from "react-i18next";
import "../../i18next";
import Header from "../../components/header/Header";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState();
  const auth = getAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className={css.login__forms}>
          <h2>{t("loginPage.SIGN_IN")}</h2>
          <div className={css.login__links}>
            <Link to="/sign_in" className={css.link__facebook}>
              <img src="./shared/img/facebook.svg" alt="facebook" />
              <span>{t("loginPage.facebook")}</span>
            </Link>
            <Link to="/sign_in" className={css.link__github}>
              <img src="./shared/img/git.svg" alt="github" />
              <span>{t("loginPage.github")}</span>
            </Link>
            <Link to="/sign_in" className={css.link__google}>
              <img src="./shared/img/google.svg" alt="google" />
              <span>{t("loginPage.google")}</span>
            </Link>
          </div>
          <div className={css.line}>
            <span>{t("loginPage.OR")}</span>
          </div>
          <form onSubmit={handleLogin} action="#">
            <div className={css.control}>
              <label htmlFor="email">{t("loginPage.Email")}</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className={css.control__input}
              />
            </div>
            <div className={css.control}>
              <label htmlFor="psw">{t("loginPage.password")}</label>
              <input
                type="password"
                name="psw"
                onChange={(e) => setPass(e.target.value)}
                className={css.control__input}
              />
            </div>
            {error && <p className={css.error}>{error}</p>}
            <div className={css.login__submit}>
              <div>
                <input type="checkbox" />
                <span className={css.login__text}>{t("loginPage.Remember_me")}</span>
              </div>
              <Link to="/password_renew" className={css.login__text}>
                {t("loginPage.forgot_psw")}
              </Link>
            </div>
            <div className={css.control}>
              <button className={css.control__sign}>{t("loginPage.SIGN_IN")}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

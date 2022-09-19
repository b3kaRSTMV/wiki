import { t } from "i18next";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import styles from "./PasswordRenew.module.scss";

export default function PasswordRenew() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>{t("forgotpassword.FORGOT_PASSWORD")}</h2>
        <form>
          <div className={styles.control}>
            <label htmlFor="email">{t("loginPage.Email")}</label>
            <input type="email" name="email" className={styles.control__input} />
          </div>
          <div className={styles.control_button}>
            <Link to="#" className={styles.control__sign}>
              {t("forgotpassword.RESET_PASSWORD")}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import css from "../footer/Footer.module.scss";
import { useTranslation } from "react-i18next";
import "../../i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className={css.footer}>
      <div className="container">
        <div className={css.footer__items}>
          <nav className={css.footer__items_links}>
            <div>
              <h4>{t("footer.Products")}</h4>
              <Link to="/features">{t("footer.Features")}</Link>
              <Link to="/pricing">{t("footer.Pricing")}</Link>
            </div>
            <div>
              <h4>{t("footer.Social")}</h4>
              <Link to="/twitter">{t("footer.Twitter")}</Link>
              <Link to="/facebook">{t("footer.Facebook")}</Link>
              <Link to="/contact">{t("footer.Contact Us")}</Link>
            </div>
            <div>
              <h4>{t("footer.Legal")}</h4>
              <Link to="/privacy">{t("footer.Privacy")}</Link>
              <Link to="/terms">{t("footer.Terms")}</Link>
            </div>
          </nav>
          <div className={css.footer__logo}>
            <img src="./shared/img/logo.png" alt="logo" />
            <p>
              {t("footer.footer_text")}
              <br /> {t("footer.at")} <span>{t("footer.Oozou")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

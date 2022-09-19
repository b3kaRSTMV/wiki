import css from "./Jumbotron.module.scss";
import { useTranslation } from "react-i18next";
import "../../i18next";

const Jumbotron = () => {
  const { t } = useTranslation();
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.content_wrapper}>
          <div className={css.text_container}>
            <p className={css.title}>{t("jumbotron.title")}</p>
            <p className={css.main_text}>{t("jumbotron.main_text")}</p>
            <button className={css.btn}>{t("jumbotron.btn_text")}</button>
          </div>
          <div className={css.img_container}>
            <img
              className={`${css.box} ${css.bounce_3}`}
              src="/images/jumbotron/jumbotrons_img.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

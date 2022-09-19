import css from "./Benefits.module.scss";
import { useTranslation } from "react-i18next";
import "../../i18next";
import { benefitsList } from "../../constants/benefitsList";
const Benefits = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div>
          <h1 className={css.title}>{t("benefits.main_title")}</h1>
        </div>
        <div>
          <h4 className={css.main_text}>{t("benefits.main_text")}</h4>
        </div>
        <div className={css.card_wrapper}>
          {benefitsList.map((element) => (
            <div className={css.card_container} key={element.id}>
              <div className={css.left}>
                <img className={css.img} src={"/images/benefits/" + element.img} alt="logo" />
              </div>
              <div className={css.right}>
                <div className={css.title_container}>
                  <h2 className={css.card_title}>{t("benefits." + element.title)}</h2>
                </div>
                <div className={css.main_text_container}>
                  <h3 className={css.card_main_text}>{t("benefits." + element.text)}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;

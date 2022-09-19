import css from "./Register.module.scss";
import { useTranslation } from "react-i18next";
import "../../i18next";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux/es/exports";
import { setUser } from "../../reduxToolkit/slices/userSlice";
import { db } from "../../firebase/firebase-config";

const Register = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    db.collection("users")
      .get()
      .then((snapshot) => {
        const usersArr = [];
        snapshot.forEach((doc) => {
          usersArr.push({ ...doc.data(), id: doc.id });
        });
        setUsers(usersArr);
      });
  }, []);
  const handleSignUp = (e) => {
    e.preventDefault();
    const data = {
      companyName: companyName,
      name: name
    };
    const userFind = users.some((user) => user.companyName === companyName);
    if (userFind) {
      setError("has already been taken");
    } else {
      createUserWithEmailAndPassword(auth, email, pass)
        .then(({ user }) => {
          db.collection("users")
            .doc()
            .set({ ...data, userId: user.uid });
          dispatch(setUser({ id: user.uid, name: user.displayName, email: email }));
        })
        .catch((error) => {
          setEmail("");
          setPass("");
          setError(error.message);
        });
    }
  };
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.content_wrapper}>
          <div className={css.text_container}>
            <h1 className={css.main_title}>{t("register.main_title")}</h1>
            <p className={css.main_text}>{t("register.main_text")}</p>
          </div>
          <div className={css.social_networks_container}>
            <div className={css.facebook}>
              <img className={css.icon} src="/images/register/facebook.png" alt="logo" />
              <h3 className={css.social_networks_text}>{t("register.facebook")}</h3>
            </div>
            <div className={css.github}>
              <img className={css.icon} src="/images/register/github.png" alt="logo" />
              <h3 className={css.social_networks_text}>{t("register.github")}</h3>
            </div>
            <div className={css.google}>
              <img className={css.icon} src="/images/register/google.png" alt="logo" />
              <h3 className={css.social_networks_text}>{t("register.google")}</h3>
            </div>
          </div>
          <div className={css.dividing_block}>
            <div className={css.first_hr}></div>
            <div className={css.dividing_div}>{t("register.or")}</div>
            <div className={css.second_hr}></div>
          </div>
          <form onSubmit={handleSignUp} className={css.input_block}>
            <div className={css.input_wrapper}>
              <img
                onChange={(e) => setName(e.target.value)}
                className={css.input_icon}
                src="/images/register/Name.png"
                alt="Company name icon"
              />
              <input
                className={css.input}
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                placeholder={t("register.company_name")}
              />
            </div>
            <div className={css.input_wrapper}>
              <img className={css.input_icon} src="/images/register/yourName.png" alt="Name icon" />
              <input
                className={css.input}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder={t("register.your_name")}
              />
            </div>
            <div className={css.input_wrapper}>
              <img className={css.input_icon} src="/images/register/email.png" alt="Email icon" />
              <input
                className={css.input}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder={t("register.email_address")}
              />
            </div>
            <div className={css.input_wrapper}>
              <img
                className={css.input_icon}
                src="/images/register/password.png"
                alt="Password icon"
              />
              <input
                className={css.input}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder={t("register.password")}
              />
            </div>
            {error && <p className={css.error}>{error}</p>}
            <button className={css.btn}>{t("register.btn_text")}</button>
          </form>
          <p className={css.footer_text}>{t("register.footer_text")}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;

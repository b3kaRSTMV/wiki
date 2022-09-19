import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import "./App.css";
import "./style/index.scss";
import PasswordRenew from "./pages/PasswordRenew/PasswordRenew";
import General from "./pages/AccountSettings/General";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/password_renew" element={<PasswordRenew />}></Route>
        <Route path="/general" element={<General />}></Route>
      </Routes>
    </>
  );
}

export default App;

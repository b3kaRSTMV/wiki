import Benefits from "../components/benefits/Benefits";
import Header from "../components/header/Header";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Register from "../components/register/Register";
import Footer from "../components/footer/Footer";

export default function MainPage() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Benefits />
      <Register />
      <Footer />
    </>
  );
}

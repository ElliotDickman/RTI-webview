import { useState } from "react";
import logo from "../logo.svg";
import LandingHeader from "../Components/LandingHeader/LandingHeader";
import LandingMain from "../Components/LandingMain/LandingMain";
import WelcomeBanner from "../Components/WelcomeBanner/WelcomeBanner";

import "../App.css";

function Landing() {
  const [welcomeBanner, setWelcomeBanner] = useState(true);

  return (
    <>
      <WelcomeBanner
        welcomeBanner={welcomeBanner}
        setWelcomeBanner={setWelcomeBanner}
      />

      <div className={`App ${!welcomeBanner && "active"}`}>
        <LandingHeader />
        <LandingMain />
      </div>
    </>
  );
}

export default Landing;

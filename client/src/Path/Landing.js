import logo from "../logo.svg";
import LandingHeader from "../Components/LandingHeader/LandingHeader";
import LandingMain from "../Components/LandingMain/LandingMain";

import "../App.css";

function Landing(props) {
  return (
    <div className="App">
      <LandingHeader />
      <LandingMain />
    </div>
  );
}

export default Landing;

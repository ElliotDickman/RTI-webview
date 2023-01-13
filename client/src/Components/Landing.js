import logo from "../logo.svg";

import "../App.css";

function Landing(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>RTI web viewer</p>
      </header>
    </div>
  );
}

export default Landing;

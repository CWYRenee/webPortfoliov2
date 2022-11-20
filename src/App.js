import React, {useState} from "react";
import "./App.css";
import PicturesDialog from "./components/PicturesDialog"

function App() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <div className="overlay">
      <a href="https://github.com/CWYRenee" target="_blank" rel="noreferrer">
        <span id="github" />
      </a>
      <a href="https://www.linkedin.com/in/renee-chiu-974255152/" target="_blank" rel="noreferrer">
      <span id="resume" />
      </a>
      
     
      <div id="pictures" onClick={handleClick}>
      {isShown && <PicturesDialog/>}
      </div>
      
      
      <a href = "mailto: chiuwingyin@gmail.com">
        <span id="me" />
      </a>

    </div>
  );
}

export default App;

import React from "react";
import Bride from "../WeddingImage/jonathan-borba-LNZVaPeJRdc-unsplash.jpg";
import Groom from "../WeddingImage/christian-bowen-X657fvd3smo-unsplash.jpg";
import "../styles/brideAndgroom.styles.css";

export const Couples = () => {
  return (
    <div className="container">
      <div className="boxmodel">
        <img src={Bride} alt="bride" className="bride" />
        <h1>The Bride</h1>
      </div>

      <div className="boxmodel">
        <img src={Groom} alt="bride" className="groom" />
        <h1>The Groom</h1>
      </div>
    </div>
  );
};

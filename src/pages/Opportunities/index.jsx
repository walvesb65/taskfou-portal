import React from "react";
import FormCandidacy from "../../components/form/FormCandidacy";
import Logoask from "../../assets/TaskFouLogo.svg";
import "./style.css";

export default function Opportunities() {
  return (
    <div className="opportunities-container">
      <div className="header-opportunities">
        <img src={Logoask} alt="" />
      </div>
      <div className="body-opportunities">
        <FormCandidacy />
      </div>
      <div className="footer-opportunities"></div>
    </div>
  );
}

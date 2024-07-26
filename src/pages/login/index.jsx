import React from "react";
import FormLogin from "../../components/form/FormLogin";
import "./style.css";

export default function login() {
  return (
    <div className="container-login">
      <div className="content-login">
        <FormLogin />
      </div>
    </div>
  );
}

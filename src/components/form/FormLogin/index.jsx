// src/components/FormLogin.jsx
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
// import { Link } from "react-router-dom";
// import eye from "../../assets/icons/eye.svg";
// import noteEye from "../../assets/icons/notEye.svg";
import "./style.css";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div className="form-login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="email"
            autoComplete="username"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              placeholder="Senha"
              onChange={handlePasswordChange}
              autoComplete="current-password"
              required
            />
            {/* <Link>
              <span>recuperar senha?</span>
            </Link> */}
            {/* <button
              type="button"
              onClick={toggleShowPassword}
              className="show-password-button"
            >
              {showPassword ? <img src={eye} /> : <img src={noteEye} />}
            </button> */}
          </div>
        </div>
        <button type="submit">
          <span>Entrar</span>
        </button>
      </form>
    </div>
  );
}

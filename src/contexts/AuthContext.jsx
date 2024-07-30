import { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  // const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/UsuarioCandidato/login", {
        usuarioCandidatoEmail: email,
        usuarioCandidatoSenha: password,
      });
      console.log(response);
      const data = response.data.usuario;

      if (data.length) {
        const userInfo = data.Usuario_Candidato_Nome;
        const userEmail = data.Usuario_Candidato_Email;
        const userId = data.Usuario_Candidato_Id;

        setIsAuthenticated(true);
        setUser(userInfo);
        setEmail(userEmail);
        localStorage.setItem("Usuario_Id", userId);
        // navigate("/home");
      }
    } catch (error) {
      alert(error.response.data.message);
      setIsAuthenticated(false);
      setUser(null);
      setEmail(null);
      localStorage.removeItem("Usuario_Id");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, user, email }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

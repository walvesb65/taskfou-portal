import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/account-registration" element={<Registration />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;

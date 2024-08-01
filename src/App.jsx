import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/login";
import Opportunities from "./pages/Opportunities";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Opportunities />} />
          {/* <Route path="/account-registration" element={<Registration />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;

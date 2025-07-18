// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
//  const isAuthenticated = localStorage.getItem("RegisterUser")
//  console.log(isAuthenticated);
 
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("newuser");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
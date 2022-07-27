import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

import { Navigate } from "react-router-dom";

export function ProtectedRoute(props) {
  const { component: Component } = props;

  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser);
  if (loggedInUser) {
    return <Component />;
  }

  return <Navigate to="/" />;
}

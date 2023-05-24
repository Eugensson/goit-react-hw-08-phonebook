import { Navigate } from 'react-router-dom';

import { useSelectors } from 'hooks/UseSelector';

export const RestrictedRoute = ({ children }) => {
  const { isLoggedIn } = useSelectors();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

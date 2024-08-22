import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth-context';

const PrivateGuard = () => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateGuard;

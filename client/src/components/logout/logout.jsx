import { Navigate } from 'react-router-dom';
import { useLogout } from '../../hooks/useAuth';

const Logout = () => {
  const logout = useLogout();

  logout();

  return <Navigate to="/" />;
};
export default Logout;

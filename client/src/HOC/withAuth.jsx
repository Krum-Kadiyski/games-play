import { useAuthContext } from '../contexts/auth-context';

export default function withAuth(Component) {
  const ComponentWrapper = (props) => {
    const authContext = useAuthContext();

    return <Component {...props} auth={authContext} />;
  };

  return ComponentWrapper;
}

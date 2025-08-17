import { useNavigate } from 'react-router';
import { Button } from './ui/button';
import useAuth from '@/hooks/useAuth';
const SignInButton = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const handleClick = () => {
    signOut();
    navigate('/sign-in');
  };

  return (
    <Button
      onClick={handleClick}
      className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded"
    >
      Sign In
    </Button>
  );
};

export default SignInButton;

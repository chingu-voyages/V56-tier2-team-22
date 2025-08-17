import { useNavigate } from 'react-router';
import useAuth from '@/hooks/useAuth';
import { Button } from './ui/button';

const SignOutButton = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleClick = () => {
    signOut();            
    navigate('/sign-in');  
  };

  return (
    <Button
      onClick={handleClick}
      className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;

import { Link } from 'react-router';
import Logo from '../../assets/logo.png';
const HeaderName = () => {
  return (
    <div className="text-lg font-bold tracking-wide text-primary">
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-16 w-auto" />
      </Link>
    </div>
  );
};

export default HeaderName;

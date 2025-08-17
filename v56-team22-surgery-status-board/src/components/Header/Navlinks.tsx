import { navByRole, type Role } from '@/constant/nav';
import { Link } from 'react-router';

type NavLinksProps = {
  role: Role;
};
const NavLinks = ({ role }: NavLinksProps) => {
  const links = navByRole[role];

  return (
    <>
      {links.map((link) => (
        <Link 
          key={link.href}
          to={link.href}
          className="text-primary hover:underline underline-offset-4 font-bold"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;

import DateDisplay from './DateDisplay';
import type { Role } from '@/constant/nav';
import NavLinks from './Navlinks';
import MobileNav from './MobileNav';

import SignInButton from '../SignIn-button';
import SignOutButton from '../SignOut-button';

const HeaderMenu = ({ role }: { role: Role }) => {
  return (
    <>
      <div className="hidden sm:flex items-center gap-6 mr-6">
        <NavLinks role={role} />
        <DateDisplay />
        {role === 'guest' && <SignInButton />}
        {(role === 'admin' || role === 'surgical') && <SignOutButton />}
      </div>

      <MobileNav role={role} />
    </>
  );
};

export default HeaderMenu;

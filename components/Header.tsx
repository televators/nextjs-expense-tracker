import {
  SignedOut,
  SignedIn,
  SignInButton,
  UserButton
} from '@clerk/nextjs';
import { checkAndCreateUser } from '@/lib/checkAndCreateUser';

const Header = async () => {
  const user = await checkAndCreateUser();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>

        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
};

export default Header;

import { Link } from '../navigation';
import Switch from './switch';

const Header = () => {
  return (
    <header className="container flex justify-between items-center min-h-[10vh] px-5">
      <Link href="/">
        <h1 className="text-4xl font-bold text-center cursor-pointer font-lobster">
          Dietify
        </h1>
      </Link>
      <Switch />
    </header>
  );
};

export default Header;

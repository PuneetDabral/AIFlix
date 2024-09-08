import { LOGO } from './utils/constants';

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from- z-10">
      <img src={LOGO} className="w-24" alt="logo" />
    </div>
  );
};

export default Header;

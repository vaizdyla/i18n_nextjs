import { NavBar } from './navbar';
import { TopBar } from './topbar/topbar';

export const Header = () => {
  return (
    <header className="flex flex-col">
      <TopBar />
      <NavBar />
    </header>
  );
};

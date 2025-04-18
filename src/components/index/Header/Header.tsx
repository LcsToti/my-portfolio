import ThemeSwitch from "./ThemeSwitch";
import SideBarSwitch from "./SideBarSwitch";
import NavLink from "./NavLink";

type Props = {
  toggleNav: () => void;
};

export default function Header({ toggleNav }: Props) {
  return (
    <header className="flex bg-neutral-100 dark:bg-neutral-900 py-4 border-b-[1px] border-neutral-300 dark:border-neutral-800">
      <nav className="flex items-center gap:2 md:gap-5 py-[10px] px-[2%] w-full ">
        <a
          href="#"
          className="text-[30px] font-[400] text-black dark:text-white"
        >
          Lucas
          <span className="text-blue-500">Toti</span>
          <span className="font-[200] text-neutral-500 ">/portfolio</span>
        </a>
        <span className="flex-1"></span>
        <ThemeSwitch />
        <SideBarSwitch toggleNav={toggleNav} />
        <ul className="hidden md:flex gap-[10px] m-0 p-0 list-none">
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#about">Sobre </NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </ul>
      </nav>
    </header>
  );
}

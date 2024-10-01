import { NavLink } from "react-router-dom";

const navitems: Navlink[] = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

interface Navlink {
  path: string;
  label: string;
}

interface NavItemsProps{
    handleClick?: ()=>void;
}

const NavItems = ({handleClick}: NavItemsProps) => {
  return (
    <div>
      <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
        {navitems.map((item, index) => (
          <li key={index} onClick={handleClick}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "text-primary font-bold" : "hover:text-primary")}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;

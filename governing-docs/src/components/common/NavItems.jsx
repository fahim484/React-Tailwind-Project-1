import { navItems } from "../../lib/db";

export const NavItems = () => {
  return (
    <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
      {navItems.map(({ label, link }, i) => (
        <a href={link} key={i}>
          <p className="text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150">
            {label}
          </p>
        </a>
      ))}
    </div>
  );
};

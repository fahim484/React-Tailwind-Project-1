import { Container } from "../common/Container";
import { Logo } from "./logo";
// import { navItems } from "../../lib/db";
import { Button } from "../common/Button";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { NavItems } from "../common/NavItems";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // [0] useState
  // const toggleMenus = () => setIsMenusOpen(!isMenusOpen);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="py-5 sm:py-8 xl:py-11 relative">
      <Container className="px-1.5 sm:px-5 xl:px-[26px]">
        <div className="flex justify-between items-center gap-2.5 px-2 pl-2.5 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full">
          <Logo />
          {/* <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
            {navItems.map(({ label, link }, i) => (
              <a href={link} key={i}>
                <p className="text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150">
                  {label}
                </p>
              </a>
            ))}
          </div> */}
          <div>
            <NavItems />
          </div>
          <div className="flex justify-center items-center gap-2.5">
            {/* Hamburger button for mobile */}
            <button
              className="block lg:hidden text-accent"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black" />
                <span className="block w-6 h-0.5 bg-black" />
                <span className="block w-6 h-0.5 bg-black" />
              </div>
            </button>
            <Button>Get Started Today</Button>
          </div>
        </div>

        {/* Scrollable Mobile Menu */}
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </Container>
    </nav>
  );
};

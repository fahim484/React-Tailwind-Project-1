// import { navItems } from "../../lib/db";
import { socialIcon } from "../../lib/db";
import { Container } from "../common/Container";
import { NavItems } from "../common/NavItems";

export const Footer = () => {
  return (
    <footer className="pt-5 lg:pt-24">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2.5 py-5">
          <h1 className="font-space-grotesk text-xl sm:text-2xl lg:text-lg xl:text-4xl font-bold">
            Ai GoverningDocs
          </h1>

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
            {socialIcon.map(({ img, url }, i) => (
              <a href={url} key={i} target="_blank">
                <img src={img} alt="Social icons" className="size-[36.18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-border-color border-t-[1px] border-transparent mt-5 md:mt-[50px] lg:mt-[107px]">
          <p className="text-lg text-center leading-[18px] text-[#111111] py-5">
            Ai GoverningDocs 2024. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

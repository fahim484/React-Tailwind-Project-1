import { cn } from "../../lib/utils";
import { GradientText } from "./GradientText";

export const SectionTitle = ({ children, className, gradient }) => {
  return (
    <h1
      className={cn(
        "text-2xl md:text-[35px] lg:text-[47px] md:leading-[45px] lg:leading-[58.7px] font-bold font-space-grotesk text-center",
        className
      )}
    >
      {children} <GradientText>{gradient}</GradientText>
    </h1>
  );
};

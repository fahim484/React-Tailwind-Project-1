import { cn } from "../../lib/utils"
import { Arrow } from "../Icon"

export const ArrowButton = ({ className }) => {
  return (
    <button className={cn("bg-white size-10 rounded-full text-primary flex justify-center items-center shadow-arrow-btn", className)}>
      <Arrow />
    </button>
  )
}

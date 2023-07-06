import { cn } from "@/lib/utils";

interface Props {
  direction: "left" | "right";
  active?: boolean;
}

const Pentagon = ({ direction, active }: Props) => {
  const pentagonClass = cn("h-4 w-4 bg-gray-400", {
    "bg-green-400": active,
  });
  const triangleClass = cn(
    "border-gray-400",
    {
      "border-green-400": active,
    },
    `w-0 h-0 border-r-[3px]
     border-t-[8px] border-t-transparent
     border-b-[8px] border-b-transparent
	  `
  );
  const leftClass = cn(triangleClass, {
    hidden: direction === "right",
  });
  const rightClass = cn(triangleClass, "border-r-0", "border-l-[3px]", {
    hidden: direction === "left",
  });

  return (
    <div className="flex items-center">
      <div className={leftClass}></div>
      <div className={pentagonClass}></div>
      <div className={rightClass}></div>
    </div>
  );
};

export default Pentagon;

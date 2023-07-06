import { cn } from "@/lib/utils";
import LineRouteMap from "./organisms/LineRouteMap";

export default function Panel() {
  const circleClass =
    "rounded-full bg-slate-300 w-6 h-6 border border-solid border-gray-500";
  const redCircleClass = cn(circleClass, "bg-red-600");
  const yellowCircleClass = cn(circleClass, "bg-yellow-400");

  return (
    <section>
      <div className="mb-2 text-xl">
        <div className="flex items-center">
          この電車の行き先を
          <span className={redCircleClass}></span>
          で示します。
        </div>
        <div className="flex items-center">
          この電車の停車駅を<span className={yellowCircleClass}></span>
          で示します。
        </div>
      </div>
      <LineRouteMap />
    </section>
  );
}

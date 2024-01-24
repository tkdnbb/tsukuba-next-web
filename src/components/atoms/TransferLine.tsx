import { cn } from "@/lib/utils";
import { StationId } from "../molecules/StationLabel";
import { StationIdToTransferLines } from "@/data/transferLines";

interface Props {
  stationId: StationId;
}

const TransferLine = ({ stationId }: Props) => {
  const transferLines = StationIdToTransferLines[stationId];
  const vlClass = cn("absolute top-0 w-0.5 bg-gray-500", {
    "h-2": true,
    "h-16": stationId === "01",
    "h-3": stationId === "02",
    "h-12": stationId === "04",
  });
  const tileClass = cn(
    "absolute grid border-b-2 border-solid border-gray-500 rotate-[-20deg] -translate-x-[19px] -translate-y-[29px]",
    {
      "h-8": true,
      "w-52 top-[99px] -translate-x-[102px]": stationId === "01",
      "w-64 top-[54px] -translate-x-[125px]": stationId === "02",
      "w-56 top-[85px] -translate-x-[110px]": stationId === "04",
    }
  );
  if (!transferLines.length) {
    return null;
  }
  return (
    <div className="relative grid place-items-center w-full max-w-[36px] text-xxs">
      <div className={vlClass}></div>
      <div className={tileClass}>
        <div className="flex justify-start gap-4">
          <div className="flex flex-col items-end">
            <div>{transferLines[0]?.en}</div>
            <div className="text-xs">{transferLines[0]?.jp}</div>
          </div>
          <div>
            <div>{transferLines[1]?.en}</div>
            <div className="text-xs">{transferLines[1]?.jp}</div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-end ml-6">
            <div className="text-xs">{transferLines[2]?.jp}</div>
            <div className="whitespace-nowrap">{transferLines[2]?.en}</div>
          </div>
          <div>
            <div className="">
              <div className="text-xs">{transferLines[3]?.jp}</div>
              <div className="whitespace-nowrap">{transferLines[3]?.en}</div>
            </div>
            <div className="">
              <div className="text-xs whitespace-nowrap">
                {transferLines[4]?.jp}
              </div>
              <div className="whitespace-nowrap">{transferLines[4]?.en}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferLine;

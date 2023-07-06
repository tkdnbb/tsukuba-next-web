import stationsData from "@/data/stations.json";
import StationLabel, { StationLabelProps } from "../molecules/StationLabel";

const LineRouteMap = () => {
  const stations = stationsData as StationLabelProps[];
  return (
    <div className="flex flex-row-reverse max-w-[90vw] overflow-x-auto">
      {stations.map(({ id, serial, enName, name, furigana }) => (
        <StationLabel key={id} {...{ id, serial, enName, name, furigana }} />
      ))}
    </div>
  );
};

export default LineRouteMap;

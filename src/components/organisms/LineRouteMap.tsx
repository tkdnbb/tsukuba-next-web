import stationsData from "@/data/stations.json";
import StationLabel, { StationLabelProps } from "../molecules/StationLabel";

const LineRouteMap = () => {
  const stations = stationsData as StationLabelProps[];
  const activeId = "05";
  const destinationId = "15";
  return (
    <div className="flex flex-row-reverse max-w-[90vw] overflow-x-auto">
      {stations.map(({ id, serial, enName, name, furigana }) => (
        <StationLabel
          key={id}
          active={id === activeId ? "left" : undefined}
          isDestination={id === destinationId}
          isStop={
            serial > parseInt(activeId) && serial < parseInt(destinationId)
          }
          {...{ id, serial, enName, name, furigana }}
        />
      ))}
    </div>
  );
};

export default LineRouteMap;

import stationsData from "@/data/stations.json"
import StationLabel, { StationLabelProps } from "../molecules/StationLabel"

const LineRouteMap = () => {
	const stations = stationsData.slice(0, 18) as StationLabelProps[]
	return (
		<div className="flex flex-row-reverse">
		  {
				stations.map(({id, serial, enName, name, furigana}) => <StationLabel key={id} {...{id, serial, enName, name, furigana}} />)
			}
		</div>
	)
}

export default LineRouteMap

import MapImg from "./MapImg";
import usePlaceSelect from "./PlaceSelect";
export default function Map() {
  const { placeNum, PlaceSelect } = usePlaceSelect();
  return (
    <div>
      <PlaceSelect />
      <MapImg placeNum={placeNum} />
    </div>
  );
}

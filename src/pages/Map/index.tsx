import usePlaceSelect from "./PlaceSelect";
export default function Map() {
  const { place, PlaceSelect } = usePlaceSelect();
  return (
    <div>
      <PlaceSelect />
    </div>
  );
}

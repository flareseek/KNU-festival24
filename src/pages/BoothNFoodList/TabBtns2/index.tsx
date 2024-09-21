import { places, types } from "./hook";

export default function TabBtns({
  activePlace,
  activeType,
  changeTab,
}: {
  activePlace: (typeof places)[number];
  activeType: string;
  changeTab: (key: "place" | "type", value: string) => void;
}) {
  return (
    <>
      {activePlace} {activeType}
      <div>
        {places.map((place) => (
          <button key={place} onClick={() => changeTab("place", place)}>
            {place}
          </button>
        ))}
      </div>
      <div>
        {types[activePlace].map((type) => (
          <button key={type} onClick={() => changeTab("type", type)}>
            {type}
          </button>
        ))}
      </div>
    </>
  );
}

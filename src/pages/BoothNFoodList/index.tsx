import BOOTHS, { BOOTH_PLACE } from "../../resources/BOOTHS";
import FOODTRUCKS, { FOODTRUCKS_PLACE } from "../../resources/FOODTRUCKS";

import Card from "./Card";
import useTabBtns from "./TabBtns";

export default function BoothNFoodList() {
  const { activeTab: typeTab, TabBtns: TypeTabBtns } = useTabBtns(["booth", "foodtruck"]);
  const { activeTab: placeTab, TabBtns: PlaceTabBtns } = useTabBtns([
    ...(typeTab == "booth" ? BOOTH_PLACE : FOODTRUCKS_PLACE),
  ]);

  return (
    <div>
      <h1>BoothList</h1>
      <section>
        <TypeTabBtns tabBtnNames={["부스", "푸드트럭"]} />
        <PlaceTabBtns />
      </section>
      <section>
        {(typeTab == "booth" ? BOOTHS : FOODTRUCKS).map((item) =>
          placeTab === item.place ? (
            <Card
              id={item.id}
              title={item.title}
              description={item.description}
              category={item.category}
              type={typeTab as "booth" | "foodtruck"}
              imgURL={item.imgURL}
            />
          ) : null,
        )}
      </section>
    </div>
  );
}

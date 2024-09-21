// import BOOTHS from "../../resources/BOOTHS";
// import FOODTRUCKS from "../../resources/FOODTRUCKS";
// import { BOOTH_PLACE, FOODTRUCKS_PLACE } from "../../shared/types/booth_foodtruck";

// import Card from "./Card";
import { cardContainer } from "./index.css";
import TabBtns from "./TabBtns2";
import { useBoothNFoodtruckTabs } from "./TabBtns2/hook";

export default function BoothNFoodList() {
  const { activePlace, activeType, changeTab } = useBoothNFoodtruckTabs();
  return (
    <div>
      <section>
        <TabBtns activePlace={activePlace} activeType={activeType} changeTab={changeTab} />
      </section>
      <section className={cardContainer}>
        {/* {(typeTab == "booth" ? BOOTHS : FOODTRUCKS).map((item) =>
          placeTab === item.place ? (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              category={item.category}
              type={typeTab as "booth" | "foodtruck"}
              imgURL={item.imgURL}
            />
          ) : null,
        )} */}
      </section>
    </div>
  );
}

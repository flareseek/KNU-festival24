import { BOOTH_HAMINSEOP_LIST } from "../../resources/booth_list";
import { cardContainer } from "./index.css";

import TabBtns from "./TabBtns2";
import Card from "./Card";
import { useBoothNFoodtruckTabs } from "./TabBtns2/hook";

export default function BoothNFoodList() {
  const { activePlace, activeType, changeTab } = useBoothNFoodtruckTabs();
  return (
    <div>
      <section>
        <TabBtns activePlace={activePlace} activeType={activeType} changeTab={changeTab} />
      </section>
      <section className={cardContainer}>
        {BOOTH_HAMINSEOP_LIST.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            description={item.description}
            imgURL={item.image}
            order={item.order}
            name={item.name}
            hasDetail={item.saleItems.length > 0 || item.description.length > 15}
          />
        ))}
      </section>
    </div>
  );
}

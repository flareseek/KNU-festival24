import { cardContainer } from "./index.css";

import TabBtns from "./TabBtns2";
import Card from "./Card";
import { useBoothNFoodtruckTabs } from "./TabBtns2/hook";
import { dataMappping } from "./dataMapping";

export default function BoothNFoodList() {
  const { activePlace, activeType, changeTab } = useBoothNFoodtruckTabs();
  let prevName = "";
  return (
    <div>
      <section>
        <TabBtns activePlace={activePlace} activeType={activeType} changeTab={changeTab} />
      </section>
      <section className={cardContainer}>
        {dataMappping(activePlace, activeType).map((item) => {
          if (prevName === item.name) return null;
          prevName = item.name;
          return (
            <Card
              key={item.id}
              id={item.id}
              description={item.description}
              imgURL={"image" in item ? item.image : undefined}
              order={item.order}
              name={item.name}
              hasDetail={
                ("saleItems" in item ? item.saleItems.length > 0 : undefined) ||
                item.description.length > 15
              }
            />
          );
        })}
      </section>
    </div>
  );
}

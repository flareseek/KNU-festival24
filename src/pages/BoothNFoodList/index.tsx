import BOOTHS from "../../resources/BOOTHS";

import Card from "./Card";

export default function BoothNFoodList() {
  return (
    <div>
      <h1>BoothList</h1>
      <section>
        {BOOTHS.map((booth) => (
          <Card
            id={booth.id}
            title={booth.title}
            description={booth.description}
            category={booth.category}
            type="booth"
            imgURL={booth.imgURL}
          />
        ))}
      </section>
    </div>
  );
}

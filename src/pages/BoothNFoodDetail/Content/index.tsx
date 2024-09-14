import { BoothFoodtuck } from "../../../shared/types/booth_foodtruck";

type ContentProps = {
  content: BoothFoodtuck["contents"][0];
};

export default function Content({ content }: ContentProps) {
  return (
    <div>
      <h3>{content.h3}</h3>
      {content.list.map((value, index) => (
        <div key={index}>
          <span>{value.title}</span>
          <span>{value.price}</span>
        </div>
      ))}
    </div>
  );
}

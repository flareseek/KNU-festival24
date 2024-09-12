import { useLocation } from "react-router-dom";

import BOOTHS from "../../resources/BOOTHS";
import FOODTRUCKS from "../../resources/FOODTRUCKS";
import Content from "./Content";
import Overview from "./Overview";

/**
 * type: 'booth' or 'foodtruck'
 * @returns 부스, 푸드트럭 상세 페이지
 */
export default function BoothNFoodDetail() {
  const [id, type] = useLocation().pathname.split("/").reverse();
  const content = (type === "booth" ? BOOTHS : FOODTRUCKS).find((value) => value.id === Number(id));

  if (!content) {
    // TODO: 404 페이지로 리다이렉트
    return <div>존재하지 않는 페이지입니다.</div>;
  }

  return (
    <div>
      <section>
        <Overview
          title={content.title}
          category={content.category}
          imgURL={content.imgURL}
          keyword={content.keyword}
          hours={content.hours}
        />
      </section>
      <div>{content.description2}</div>
      <section>
        {content.contents.map((value, index) => (
          <Content key={index} content={value} />
        ))}
      </section>
    </div>
  );
}

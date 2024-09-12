type OverviewProps = {
  title: string;
  category: string;
  imgURL: string;
  keyword: string[];
  hours: string;
};

export default function Overview({ title, category, imgURL, keyword, hours }: OverviewProps) {
  return (
    <div>
      <img src={imgURL} alt={title} />
      <div>{category}</div>
      <div>
        {keyword.map((value, index) => (
          <span key={index}>{value}</span>
        ))}
      </div>
      <div>
        <span className="material-symbols-outlined">schedule</span>
        <span>{hours}</span>
      </div>
    </div>
  );
}

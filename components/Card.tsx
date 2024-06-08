type TCard = {
  title: string;
  date: Date;
  summary: string;
  route: string;
};

function Card({ title, date, summary, route }: TCard) {
  return (
    <a key={`title-${title}`} href={route}>
      <h1>{title}</h1>
      <p>{summary}</p>
    </a>
  );
}

export default Card;

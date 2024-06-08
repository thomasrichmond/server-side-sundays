import NextLink from "next/link";

type TCard = {
  title: string;
  date: Date;
  summary: string;
  route: string;
};

function Card({ title, date, summary, route }: TCard) {
  return (
    <NextLink key={`title-${title}`} href={route}>
      <h1>{title}</h1>
      <p>{summary}</p>
    </NextLink>
  );
}

export default Card;

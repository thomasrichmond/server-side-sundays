import NextLink from "next/link";

type TCard = {
  title: string;
  date: Date;
  summary: string;
  route: string;
  readTime: number;
};

function Card({ title, date, summary, route, readTime }: TCard) {
  const dateFormatted = new Date(date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <NextLink key={`title-${title}`} href={route} className="w-full group">
      <div className="flex flex-col gap-2 group-hover:scale-105 group-hover:duration-150 group-hover:ease-in ease-out duration-150 w-fit">
        <div>
          <h1 className="font-montserrat text-2xl">{title}</h1>
          <p className="font-merriweather text-sm bg-gradient-to-r from-red-500 to-blue-500 inline-block text-transparent bg-clip-text">
            {`${readTime} minute read`} | {dateFormatted}
          </p>
        </div>
        <p className="font-merriweather text-base">{summary}</p>
      </div>
    </NextLink>
  );
}

export default Card;

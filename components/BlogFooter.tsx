import Image from "next/image";
import NextLink from "next/link";
import Github from "../public/assets/github.svg";
import LinkedIn from "../public/assets/linkedin.svg";
import Website from "../public/assets/website.svg";

function BlogFooter() {
  return (
    <footer className="flex flex-row justify-between align-middle mt-8">
      <NextLink
        href="/"
        className="hover:scale-105 duration-150 hover:duration-150 hover:ease-in ease-out">
        <h1 className="font-montserrat text-xl bg-gradient-to-r from-red-500 to-blue-500 inline-block text-transparent bg-clip-text">
          Server Side Sundays
        </h1>
      </NextLink>
      <div className="flex gap-3">
        <NextLink
          target="_blank"
          href="https://github.com/thomasrichmond"
          className="hover:scale-105 duration-150 hover:duration-150 hover:ease-in ease-out">
          <Image src={Github} alt="github-logo" height={20} width={20} />
        </NextLink>
        <NextLink
          target="_blank"
          href="https://www.linkedin.com/in/t-ri/"
          className="hover:scale-105 duration-150 hover:duration-150 hover:ease-in ease-out">
          <Image src={LinkedIn} alt="linkedin-logo" height={20} width={20} />
        </NextLink>
        <NextLink
          target="_blank"
          href="https://tomrichmond.dev"
          className="hover:scale-105 duration-150 hover:duration-150 hover:ease-in ease-out">
          <Image src={Website} alt="website-logo" height={20} width={20} />
        </NextLink>
      </div>
    </footer>
  );
}

export default BlogFooter;

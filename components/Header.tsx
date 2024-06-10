import Image from "next/image";
import NextLink from "next/link";

function Header() {
  return (
    <header className="flex flex-row justify-between">
      <NextLink href="/">
        <h1 className="font-montserrat text-4xl bg-gradient-to-r from-red-500 to-blue-500 inline-block text-transparent bg-clip-text">
          Server Side Sundays
        </h1>
      </NextLink>

      <p className="font-montserrat text-base flex flex-row justify-center items-center gap-1">
        thoughts of{" "}
        <NextLink
          target="_blank"
          href="https://tomrichmond.dev"
          className="flex flex-row gap-2 items-center">
          <span className="font-montserrat text-base bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text">
            Toms
          </span>
          <Image
            className="rounded-full"
            alt="toms-github-image"
            src="https://github.com/thomasrichmond.png"
            width={48}
            height={48}
          />
        </NextLink>
      </p>
    </header>
  );
}

export default Header;

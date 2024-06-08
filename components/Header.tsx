import Image from "next/image";

function Header() {
  return (
    <header>
      <h1>Server Side Sundays</h1>
      <Image
        alt="tom-image"
        src="https://github.com/thomasrichmond.png"
        width={32}
        height={32}
      />
    </header>
  );
}

export default Header;

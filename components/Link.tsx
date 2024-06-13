import React from "react";
import NextLink from "next/link";

type TLink = {
  href: string;
  label: string;
  target: "_blank" | "_parent" | "_target" | "_self";
};

function Link({ href, label, target }: TLink) {
  return (
    <NextLink
      className=" text-red-500 inline-block bg-[linear-gradient(#F87171_0_0)] bg-[0%_95%] [background-size:0%_2px] bg-no-repeat [transition:background-size_0.3s,_background-position_0s_0.3s] hover:bg-[0%_95%] hover:[background-size:100%_2px]"
      href={href}
      target={target}>
      {label}
    </NextLink>
  );
}

export default Link;

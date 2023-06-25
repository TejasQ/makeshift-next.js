import React, { useContext } from "react";
import { RouterContext } from "./Router";

export const Link = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const { pushState } = useContext(RouterContext);
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        pushState(to);
      }}
    >
      {children}
    </a>
  );
};

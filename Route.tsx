import React from "react";
import { RouterContext } from "./Router";

export const Route = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) => {
  const { path: currentPath } = React.useContext(RouterContext);

  if (currentPath.split("?")[0] === path.split("?")[0]) {
    return <>{children}</>;
  }

  return null;
};

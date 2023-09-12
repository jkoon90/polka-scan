import React, { PropsWithChildren } from "react";

import { Container } from "./styles";

interface Props {
  className?: string;
}

export const Layout: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <Container className={className}>{children}</Container>;
};

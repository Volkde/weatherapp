import React from "react";
import { LayoutWrapper } from "./styles";

interface LayoutProps {
  
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
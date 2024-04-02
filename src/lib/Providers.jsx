import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const Providers = ({ children }) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};

export default Providers;

import React from "react";
import Header from "../../components/header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

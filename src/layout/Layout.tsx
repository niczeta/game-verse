// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import { Footer } from "../sections/Footer";
import { Navbar } from "../sections/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

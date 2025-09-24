"use client";
import React from "react";
import { usePathname } from "next/navigation";
import About from "./content-components/About";
import Project from "./content-components/Project";
import Contact from "./content-components/Contact";
const CategoryPage = () => {
  const pathname = usePathname();

  return (
    <div className="mr-5 ml-5">
      {pathname === "/about" ? (
        <About />
      ) : pathname === "/project" ? (
        <Project />
      ) : pathname === "/contact" ? (
        <Contact />
      ) : (
        ""
      )}
    </div>
  );
};

export default CategoryPage;

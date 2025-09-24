"use client";
import React from "react";
import { usePathname } from "next/navigation";
import About from "./content-components/About";
import Project from "./content-components/Project";
import Contact from "./content-components/Contact";
const page = () => {
  const pathname = usePathname();
  const category = pathname.split("/")[2];

  return (
    <div className="mr-5 ml-5">
      {category === "about" ? (
        <About />
      ) : category === "project" ? (
        <Project />
      ) : category === "contact" ? (
        <Contact />
      ) : (
        ""
      )}
    </div>
  );
};

export default page;

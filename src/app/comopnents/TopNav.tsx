"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const TopNav = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 네비게이션 높이 유지용 더미 박스 */}
      <div className={isFixed ? "nav-spacer" : ""}></div>

      <div className={`link-container ${isFixed ? "nav-fixed" : "none-fixed"}`}>
        <ul>
          <li>
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/project">
              Project
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopNav;

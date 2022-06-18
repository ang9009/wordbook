import React, { useState } from "react";
import { FaPalette, FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { IconContext } from "react-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [marginTop, setMarginTop] = useState<any>(null);

  //TODO: make switch case that takes in router pathname and changes marker position

  return (
    <>
      <nav>
        <div
          onClick={(e) => {
            setMarginTop(e.currentTarget.offsetTop);
          }}
          style={{
            color: router.pathname === "/" ? "#fff" : "var(--buttonColor)",
          }}
        >
          <Link href={`/`}>
            <HiHome />
          </Link>
        </div>
        <div
          onClick={(e) => {
            setMarginTop(e.currentTarget.offsetTop);
          }}
          style={{
            color:
              router.pathname === "/search" ? "#fff" : "var(--buttonColor)",
          }}
        >
          <Link href={`/search`}>
            <FaSearch />
          </Link>
        </div>
        <div
          onClick={(e) => {
            setMarginTop(e.currentTarget.offsetTop);
          }}
          style={{
            color:
              router.pathname === "/account" ? "#fff" : "var(--buttonColor)",
          }}
        >
          <Link href="/account">
            <BsFillPersonFill />
          </Link>
        </div>
        <div
          onClick={(e) => {
            setMarginTop(e.currentTarget.offsetTop);
          }}
          style={{
            color:
              router.pathname === "/themes" ? "#fff" : "var(--buttonColor)",
          }}
        >
          <Link href="/themes">
            <FaPalette />
          </Link>
        </div>
        <Link href="/">
          <h1 className="logo">wb</h1>
        </Link>
        <span id="marker"></span>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: calc(100vh);
          width: var(--navBarWidth);
          position: fixed;
          top: 0;
          left: 0;
        }

        nav div {
          margin-bottom: 35px;
          cursor: pointer;
          color: var(--buttonColor);
          transition: 0.2s;
        }

        nav:first-child {
          padding-top: var(--navBarPaddingTop);
        }

        nav div:hover {
          color: #fff !important;
        }

        .logo {
          margin-top: auto;
          margin-bottom: 20px;
          font-size: 20px;
          color: var(--buttonColor);
          cursor: pointer;
        }

        #marker {
          position: absolute;
          left: 0;
          top: ${marginTop
            ? marginTop - 8
            : marginTop}px; //16 divided by 2 to make it centered
          width: 3px;
          height: ${marginTop ? 40 : 0}px; //24 (height of icon) + 16
          border-radius: 1.5px;
          background: var(--primaryColor);
          transition: 0.2s;
        }
      `}</style>
    </>
  );
};

export default Navbar;

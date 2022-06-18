import React, { useState } from "react";
import { FaPalette, FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { IconContext } from "react-icons";
import Link from "next/link";

const Navbar = () => {
  const [marginTop, setMarginTop] = useState<any>(null);

  return (
    <>
      <nav>
        <span id="marker"></span>
        <div
          onClick={(e) => {
            setMarginTop(e.currentTarget.offsetTop);
          }}
        >
          <HiHome />
        </div>
        <div
          onClick={(e) => {
            setMarginTop(e.currentTarget.offsetTop);
          }}
        >
          <FaSearch />
        </div>
        <div
          onClick={(e) => {
            setMarginTop(e.currentTarget.offsetTop);
          }}
        >
          <BsFillPersonFill />
        </div>
        <div
          onClick={(e) => {
            setMarginTop(e.currentTarget.offsetTop);
          }}
        >
          <FaPalette />
        </div>
        <Link href="./">
          <h1 className="logo">wb</h1>
        </Link>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 20px;
          margin-top: 65px;
          height: calc(100vh - 65px);
          width: fit-content;
        }

        nav div {
          margin-bottom: 35px;
          cursor: pointer;
          color: var(--buttonColor);
          transition: 0.2s;
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
          top: ${marginTop ? marginTop - 8 : marginTop}px;
          width: 3px;
          height: ${marginTop ? 40 : 0}px;
          border-radius: 1.5px;
          background: var(--primaryColor);
          transition: 0.2s;
        }
      `}</style>
    </>
  );
};

export default Navbar;

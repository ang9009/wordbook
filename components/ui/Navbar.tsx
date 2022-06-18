import React, { useState } from "react";
import { FaPalette, FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { IconContext } from "react-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import getNavbarIndicatorInfo from "../../utils/getNavbarIndicatorInfo";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <nav>
        <Link href={`/`}>
          <div>
            <HiHome />
          </div>
        </Link>
        <Link href={`/search`}>
          <div>
            <FaSearch />
          </div>
        </Link>
        <Link href="/account">
          <div>
            <BsFillPersonFill />
          </div>
        </Link>
        <Link href="/themes">
          <div>
            <FaPalette />
          </div>
        </Link>
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
          user-select: none;
          top: 0;
          left: 0;
        }

        nav div {
          margin-bottom: 35px;
          cursor: pointer;
          color: var(--navIconColor);
          transition: 0.2s;
        }

        nav:first-child {
          padding-top: var(--navBarPaddingTop);
        }

        nav div:hover {
          color: var(--selectedNavIconColor);
        }

        nav div:nth-child(${getNavbarIndicatorInfo(router.pathname)!.n}) {
          color: var(--selectedNavIconColor);
        }

        .logo {
          margin-top: auto;
          margin-bottom: 20px;
          font-size: 20px;
          color: var(--navIconColor);
          cursor: pointer;
        }

        #marker {
          position: absolute;
          left: 0;
          top: ${getNavbarIndicatorInfo(router.pathname)!.marginTop -
          8}px; //16px divided by 2 to make it centered
          width: 3px;
          height: 40px; //24px (height of icon) + 16px
          border-radius: 1.5px;
          background: var(--accentColor);
          transition: 0.2s;
        }
      `}</style>
    </>
  );
};

export default Navbar;

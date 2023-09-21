"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Logo from "../assets/images/logo.png";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navLogo = useRef(null);
  const navBarRef = useRef(null);
  useEffect(() => {
    navBarRef.current.style.transition = "all .5s";
    let to = gsap.to(navLogo.current, {
      scrollTrigger: {
        trigger: "html",
        start: "top top",
        end: "bottom top",
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1,
        onEnter: () => {
          gsap.to(navLogo.current, { width: "8rem" });
          gsap.to(navLogo.current, { y: -40 });
          gsap.to(navLogo.current, {
            filter: "drop-shadow(2px 2px 5px white)",
          });
          gsap.to(navBarRef.current, {
            backdropFilter: "blur(8px)",
            background: "rgba(80, 80, 80, 0.555)",
          });
        },
        onLeaveBack: () => {
          gsap.to(navLogo.current, { width: "13rem" });
          gsap.to(navLogo.current, { y: 5 });
          gsap.to(navBarRef.current, {
            backdropFilter: "blur(0px)",
            background: "rgb(203 213 225 / var(--tw-bg-opacity))",
          });
        },
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <nav
      className="flex items-center justify-between p-6 h-20 bg-gray-300"
      ref={navBarRef}
    >
      <div>
        <button>
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>
      <div ref={navLogo}>
        <Image
          src={Logo}
          height={""}
          width={""}
          alt="Not found"
          className="relative top-10 left-8 z-50"
          style={{ height: "", width: "13rem" }}
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link href="/profile">
          <i className="fa-solid fa-user text-2xl"></i>
        </Link>

        <button type="button" className="relative inline-flex items-center p-1">
          <i className="fa-solid fa-cart-shopping text-2xl"></i>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-white border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            20
          </div>
        </button>
      </div>
    </nav>
  );
}

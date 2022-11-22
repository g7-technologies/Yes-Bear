/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Navbar.styled";
import { Icon } from "@iconify/react";
import { NavHashLink } from "react-router-hash-link";
import Logo from "../../images/main_logo.png";
import ringer from "../../Audio/click.mpeg";
import { useNavigate } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();
  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  }
  const audio = new Audio(ringer);
  audio.loop = false;
  const [mobileMenu, setMobileMenu] = useState(false);
  // window resize hook
  useEffect(() => {
    // window size hook for sidenav
    function checkScreenSize() {
      if (window.innerWidth > 992) {
        setMobileMenu(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [setMobileMenu]);

  // for mobile sidenav display
  useEffect(() => {
    const navContainer = document.querySelector(".nav-link-container");
    if (mobileMenu) {
      navContainer.style.height = 100 + "vh";
    } else {
      navContainer.style.height = 0 + "px";
    }
  }, [mobileMenu]);

  // scroll function
  useEffect(() => {
    let navigation = document.querySelector("header");
    window.addEventListener("scroll", scrollFunc);
    function scrollFunc() {
      if (window.innerWidth) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          navigation.style.background = "#080A23";
        } else {
          navigation.style.background = "transparent";
        }
      } else {
        navigation.style.background = "#151515";
      }
    }
  }, []);

  // scroll with offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="nav-logo">
          <a href="/">
            {" "}
            <img src={Logo} className="img-fluid" alt="logo" />
          </a>
        </div>
        <div className="nav-link-container ">
          <ul>
            <li>
              <NavHashLink
                to="/home#home"
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                  audio.play();
                }}>
                Home
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="/home#gallery"
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                  audio.play();
                }}>
                Utilities
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="/home#roadmap"
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                  audio.play();
                }}>
                Roadmap
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="/home#team"
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                  audio.play();
                }}>
                Team
              </NavHashLink>
            </li>

            <li className="nav-link-last-item">
              <NavHashLink
                to="/home#faq"
                scroll={(el) => scrollWithOffset(el)}
                onClick={() => {
                  setMobileMenu(false);
                  audio.play();
                }}>
                Faq's
              </NavHashLink>
            </li>
            <li className="social-media-icon">
              <a
                target="blank"
                href="https://yesbear.gitbook.io/whitepaper/"
                onClick={() => {
                  audio.play();
                }}>
                <Icon icon="simple-icons:gitbook" />
              </a>
              <a
                target="blank"
                href="https://www.instagram.com/yesbear_nfts/"
                onClick={() => {
                  audio.play();
                }}>
                <Icon icon="bxl:instagram" />
              </a>

              <a
                target="blank"
                href="https://twitter.com/YesBear_NFTs"
                onClick={() => {
                  audio.play();
                }}>
                <Icon icon="ant-design:twitter-outlined" />
              </a>
              <a
                target="blank"
                href="#"
                onClick={() => {
                  audio.play();
                }}>
                <Icon icon="simple-icons:opensea" />
              </a>
              <a
                href="https://discord.gg/5FGckKk2h4"
                onClick={() => {
                  audio.play();
                }}>
                <Icon icon="bxl:discord-alt" />
              </a>
            </li>
            <li className="nav-button">
              <li>
                <Link
                  to="/"
                  scroll={(el) => scrollWithOffset(el)}
                  onClick={() => {
                    setMobileMenu(false);
                    audio.play();
                    changeLocation("/");
                  }}>
                  Mint Now
                </Link>
              </li>
            </li>
          </ul>
        </div>
        <div className="mobile-menu">
          <button
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}>
            {mobileMenu ? (
              <Icon icon="akar-icons:cross" />
            ) : (
              <Icon icon="uim:bars" />
            )}
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;

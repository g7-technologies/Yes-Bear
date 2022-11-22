/** @format */

import React from "react";
import Wrapper from "./Footer.styled";
import { Icon } from "@iconify/react";
import ringer from "../../Audio/click.mpeg";

import AOS from "aos";

function Footer() {
  const audio = new Audio(ringer);
  audio.loop = false;
  AOS.init();
  return (
    <Wrapper>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <div
                className="footerContent"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <img src={FooterBg} className="img-fluid" alt="footer" />
                <div className="content">
                  The above photos show the love of bears only and are not being
                  used to advertise <br /> our NFTs. If this offends anyone,
                  please kindly let us know.
                </div>
              </div> */}
              <div className="footerIcon">
                <div className="footer-social-icons">
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
                    onClick={() => {
                      audio.play();
                    }}
                    href="https://www.instagram.com/yesbear_nfts/">
                    <Icon icon="bxl:instagram" />
                  </a>
                  <a
                    target="blank"
                    onClick={() => {
                      audio.play();
                    }}
                    href="https://twitter.com/YesBear_NFTs">
                    <Icon icon="ant-design:twitter-outlined" />
                  </a>
                  <a
                    target="blank"
                    onClick={() => {
                      audio.play();
                    }}
                    href="#">
                    <Icon icon="simple-icons:opensea" />
                  </a>
                  <a
                    target="blank"
                    onClick={() => {
                      audio.play();
                    }}
                    href="https://discord.gg/5FGckKk2h4">
                    <Icon icon="bxl:discord-alt" />
                  </a>
                </div>
                <div className="footerText">
                  <a href="mailto:contact@yesbear.xyz">
                    Email: contact@yesbear.xyz
                  </a>{" "}
                  <br />
                  <span>©2022 Yes Bear. All right reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;

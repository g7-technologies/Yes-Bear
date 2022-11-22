import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import Wrapper from "./Gallery.styled";
import AOS from "aos";
import ringer from "../../Audio/click.mpeg";

function Gallery() {
  const audio = new Audio(ringer);
  audio.loop = false;
  AOS.init();
  function handleAccordion(e) {
    audio.play();
  }
  return (
    <Wrapper>
      <div
        className="container"
        id="gallery"
        data-aos="fade-up"
        data-aos-duration="2000">
        <div
          className="row"
          style={{ paddingtop: "100px", paddingbottom: "100px" }}>
          <div className="col-12">
            <div className="collapsed_title">
              <h1>The Utilities</h1>
            </div>
          </div>
          <div className="col-md-10 custom-col-10">
            <div onClick={handleAccordion}>
              <Accordion atomic={true}>
                <AccordionItem title="Yes Bear Toys">
                  <div className="panel">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          <ul className="listItem">
                            <li>
                              Yes Bear features a series of lovable characters
                              and personalities to adopt. Our plan is to build a
                              toy collection to share our bears with the world
                              in a memorable way!
                            </li>
                            <li>
                              Our first collection will feature
                              community-favorites which include: Santa Paws,
                              Bearon, Chef De Honey, Playbear, and more!
                              Exercise your I.P. rights and bridge Web2 and Web3
                              with strategic plush releases themed around your
                              NFTs.{" "}
                            </li>
                            <li>
                              We consider our toy creations as an integral part
                              of our project utility. Stay tuned on our socials
                              to keep in touch with updates!
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionItem>

                <AccordionItem title="Yes Bear Game">
                  <div className="panel">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          {" "}
                          <ul className="listItem">
                            <li>
                              To share a fun and innovative experience with our
                              community, we are developing a Yes Bear mobile
                              game on both iOs App Store and Google Play. The
                              release of our game will propel Yes Bear digital
                              artwork with wider audiences beyond Web3 and
                              reward our holders as early supporters of the
                              project.{" "}
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionItem>

                <AccordionItem title="Yes Bear 2nd NFT expansion collection">
                  <div className="panel">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          <ul className="listItem">
                            <li>
                              We plan to launch a Yes Bear 2nd NFT expansion
                              collection called Yes Bear: Untold Secret which
                              will feature tasteful refreshes of skin,
                              background, and other traits to give familiar
                              bears a new, exciting look. Yes Bear Holders will
                              get exclusive access to the WL mint for Yes Bear:
                              Untold Secret, with limited supply available!
                            </li>
                            <li>
                              Key milestones for our release of Yes Bear: Untold
                              Secret will be shared on our social media
                              platforms. Follow us and stay in touch as we build
                              this expansion together!{" "}
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionItem>

                <AccordionItem title="Get Yes Bear Exclusive Merch Access">
                  <div className="panel">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          <ul className="listItem">
                            <li>
                              Holders of the Yes Bear NFTs will have access to a
                              token gated shop where they can buy exclusive and
                              stylish merchandise to represent our brand!{" "}
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionItem>

                <AccordionItem title="Philanthropy">
                  <div className="panel">
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          <ul className="listItem">
                            <li>
                              After our collection is sold out, the Yes Bear
                              team will raise fund for towards bear
                              conservation organizations on behalf of our
                              holders.!{" "}
                            </li>
                            <li>
                              You will receive credit for your part in helping
                              us raise these funds for a good cause.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionItem>

                {/* <AccordionItem title="6. What kind of rights do I have to the artwork as a holder?">
                  <div className="panel">
                    <p>
                      As a holder, you will be able to fully exercise the rights to your Yes Bear artwork for usage on commercial products like t-shirts, plushies, and logos for your business. Represent your work fully and let our artwork help you!
                    </p>
                  </div>
                </AccordionItem> */}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Gallery;

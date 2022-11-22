import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import Wrapper from "./Collapsed.styled";
import AOS from "aos";
import ringer from "../../Audio/click.mpeg";

function Collapsed() {
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
        id="faq"
        data-aos="fade-down"
        data-aos-duration="2000">
        <div
          className="row"
          style={{ paddingtop: "100px", paddingbottom: "100px" }}>
          <div className="col-12">
            <div className="collapsed_title">
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
          <div className="col-md-10">
            <div onClick={handleAccordion}>
              <Accordion atomic={true}>
                <AccordionItem title="01 What makes Yes Bear unique?">
                  <div className="panel">
                    <p>
                      <ul className="listItem">
                        <li>
                          Yes Bear is illustrated using more intricate pixels
                          than other pixel collections, which provides intricate
                          detailing that helps them look great.
                        </li>
                        <li>
                          Yes Bear NFTs look straight at the audience, making
                          them ideal to use as profile pictures.
                        </li>
                        <li>
                          Yes Bear NFTs are uniquely generated and uniquely
                          yours. With over 200+ artistic attributes and rare
                          traits to collect, there is a Yes Bear that suits
                          everyone!
                        </li>
                      </ul>
                    </p>
                  </div>
                </AccordionItem>

                <AccordionItem title="2. How many Yes Bears are there?">
                  <div className="panel">
                    <p>
                      {" "}
                      <ul className="listItem">
                        <li>
                          There are a total of 6,666 unique Yes Bears in our
                          collection.
                        </li>
                      </ul>
                    </p>
                  </div>
                </AccordionItem>

                <AccordionItem title=" 3. How will your project help protect bears?">
                  <div className="panel">
                    <p>
                      <ul className="listItem">
                        <li>
                          Yes Bear will raise fund for bear conservation
                          organizations when the collection is sold out.
                          Moreover, we hope the release of Yes Bear collection
                          will inspire the love of bears to help them escape
                          from captivity, cruelty, and abuse to live meaningful
                          and happier lives.
                        </li>
                      </ul>
                    </p>
                  </div>
                </AccordionItem>

                <AccordionItem title="4. What kind of rights do I have to the artwork as a holder?">
                  <div className="panel">
                    <p>
                      <ul className="listItem">
                        <li>
                          As a holder, you will be able to fully exercise the
                          rights to your Yes Bear artwork for usage on
                          commercial products like t-shirts, plushies, and logos
                          for your business. Represent your work fully and let
                          our artwork help you!
                        </li>
                      </ul>
                    </p>
                  </div>
                </AccordionItem>

                <AccordionItem title="5. What is the vision of the Yes Bear team?">
                  <div className="panel">
                    <p>
                      <ul className="listItem">
                        <li>
                          Yes bear is a team of worldwide professionals spanning
                          from Asia to Europe. We are detail-oriented,
                          dedicated, and passionate about everything we do.
                          Within Web3, we are eager to build stunning NFT
                          collections, aligning communities, and realistic
                          activations to drive growth to our brand recognition
                          and collection value in a long-term and sustainable
                          way.
                        </li>

                        <li>
                          We look forward to fostering new ideas and activities
                          as one - We are stronger together.
                        </li>
                      </ul>
                    </p>
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

export default Collapsed;

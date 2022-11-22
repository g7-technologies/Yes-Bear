import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 32px;
  right: 32px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 42px;
  width: 42px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  -webkit-animation: fadeIn 0.3s;
  animation: fadeIn 0.3s;
  opacity: 1;
  background: transparent;
  border-radius: 4px;
  -webkit-transition: opacity 0.4s, color ease-in-out 0.2s,
    background ease-in-out 0.2s;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border: 1px solid white;
  border-radius: 50%;
  transition: 0.5s ease-in-out;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? "flex" : "none"};

  &:hover {
    transform: translateY(-10px);
    background: linear-gradient(90deg, #25b24c 0%, #229c5e 50%, #1f8672 101.5%);
    border: 0px;
    color: white;
  }
`;

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </ButtonContainer>
  );
};

export default BackToTopButton;

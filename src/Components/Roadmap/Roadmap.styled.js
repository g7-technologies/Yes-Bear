/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #111232;
  .roadmap {
    background-size: cover;
    background-position: center;
    padding: 60px 0px;
  }
  .title {
    text-align: center;
  }
  .title h1 {
    font-size: 55px;
  }
  .roadMapSingleItem {
    margin: 320px 0px 270px 0px;
    position: relative;
    @media (max-width: 992px) {
      margin: 250px 0px 230px 0px;
    }
  }
  .roadMapBorder {
    width: 100%;
    background: #57a4aa;
    height: 10px;
    border-radius: 15px;
    border: 2px solid white;
    position: relative;
  }
  .volume {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #57a4aa;
    border: 2px solid white;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-7%, -40%);
  }

  .roadMapBorder2 {
    margin-top: 30px;
    background-color: #d36151;
  }

  .volume2 {
    background-color: #d36151;
    left: auto;
    right: 0;
    transform: translate(4px, -15px);
  }

  @media (max-width: 575.98px) {
    .title h1 {
      font-size: 31px;
      margin-bottom: 50px;
    }

    .roadmap {
      background-image: none;
      padding: 60px 15px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .roadmap {
      background-image: none;
    }

    .title h1 {
      font-size: 36px;
      margin-bottom: 50px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .title h1 {
      font-size: 41px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .title h1 {
      font-size: 47px;
    }
  }
  @media (min-width: 766px) {
    .mobileRoadItem {
      display: none;
    }
  }
  @media (max-width: 766px) {
    .roadMapSingleItem {
      display: none;
    }
    .mobileRoadItem {
      display: block;
    }
  }

  .single-event-container {
    padding: 0px;
    width: 50%;
    background: linear-gradient(90deg, #fb6567 0%, #ec008b 101.5%);
    position: relative;
    transition: all 400ms ease-in-out;
  }

  .single-event-container.right {
    margin-left: auto;
  }

  .event-description {
    padding: 10px 8px;
    margin: 0 0px;
    border-radius: 5px;
  }
  .event-description h2 {
    margin-bottom: 20px;
    color: darkslategray;
  }

  .event-description p {
    font-size: 1.1em;
    @media (max-width: 575.98px) {
      font-size: 13px;
    }
  }

  .border {
    width: 4px;
    height: 100%;
    position: absolute;
    background-color: #fde1eb;
    top: 0;
    right: -2px;
  }

  .single-event-container.right .border {
    left: -2px;
  }

  .single-event-container.right .circle-date {
    left: -25px;
  }

  /* roadmap last */
  .roadMapItem {
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
    display: flex;
  }
  .ContentRoadMap {
  }
  .ContentRoadMap p {
    @media (max-width: 992px) {
      font-size: 13px;
    }
  }
  .roadmapCommonItem {
    flex: 0 0 20%;
    max-width: 20%;
    text-align: center;
    position: absolute;
    top: -31vh;
    @media (max-width: 992px) {
      top: -35vh;
    }
  }
  .roadMapBorderContent {
    width: 3px;
    height: 25vh;
    background: #55a8af;
    position: relative;
    left: 50%;
  }
  .roadMapBorderContent2 {
    height: 12vh;
  }

  .roadmapCommonItem1 {
    left: 3%;
  }
  .roadmapCommonItem2 {
    left: 20%;

    top: -18vh;
    @media (max-width: 992px) {
      top: -22vh;
    }
  }
  .roadmapCommonItem3 {
    left: 35%;
    top: -33vh;
    @media (max-width: 1192px) {
      top: -38vh;
    }
  }
  .roadmapCommonItem4 {
    left: 60%;

    top: -18vh;
    @media (max-width: 1192px) {
      top: -22vh;
      left: 56%;
    }
  }
  .roadmapCommonItem5 {
    left: auto;
    right: 5%;
    @media (max-width: 1192px) {
      top: -35vh;
    }
  }
  .roadmapsndItem1 {
    top: 6vh;
    left: 8%;
  }
  .roadMapSndBorder {
    background-color: #d36151;
  }
  .roadmapsndItem2 {
    left: 25%;
  }
  .roadMapBorderContentsnd2 {
    height: 12vh;
  }
  .roadmapsndItem3 {
    left: 45%;
  }
  .roadmapsndItem4 {
    left: 65%;
    @media (max-width: 992px) {
      left: 66%;
    }
  }
  .roadmapsndItem5 {
    left: auto;
    right: 0;
  }
  .roadmap-emoj {
  }
  .roadmap-emoj img {
    width: 14%;
    z-index: 545;
    position: absolute;
    top: -335%;
    left: auto;
    right: 0px;
    @media (max-width: 1192px) {
      top: -238%;
    }
    @media (max-width: 992px) {
      top: -179%;
    }
  }
`;
export default Wrapper;

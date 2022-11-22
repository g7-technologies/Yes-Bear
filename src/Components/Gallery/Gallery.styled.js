/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 50px;
  background-color: #080a23;
  .gallery {
    padding: 100px 0px;
  }
  .img-fluid {
    max-width: 80%;
    height: auto;
  }
  p {
    color: #c0c0c0;
    font-size: 18px;
  }
  .toysLink {
    padding-left: 40px;
  }
  .toysLink li {
    margin-top: 20px;
    font-size: 18px;
    margin-bottom: 30px;
  }
  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding-right: 0;
    padding-left: 15px;
  }
  .title {
    text-align: left;
    margin-bottom: 20px;
  }
  .title h1 {
    font-size: 55px;
    @media (max-width: 1199.98px) {
      font-size: 47px;
    }
    @media (max-width: 991.98px) {
      font-size: 41px;
    }
    @media (max-width: 767.98px) {
      font-size: 36px;
    }
    @media (max-width: 575.98px) {
      font-size: 31px;
    }
  }
  .flexRow,
  .flexRow2 {
    justify-content: center;
    @media (max-width: 991.98px) {
      flex-direction: column-reverse;
    }
  }
  .cardImg {
    overflow: hidden;
    margin-bottom: 10px;
  }
  .cardImg img {
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
  .cardImg img:hover {
    transform: scale(1.1);
    overflow: hidden;
  }
  .col-md-10 {
    margin-left: 20%;
  }
  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 31.333333%;
  }
  .brows {
    margin-top: 50px;
  }
  .brows a {
    font-size: 18px;
    -webkit-text-decoration: none;
    text-decoration: none;
    padding: 16px 1.7rem;
    /* line-height: 50px; */
    -webkit-transform-origin: right;
    -ms-transform-origin: right;
    transform-origin: right;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background: linear-gradient(90deg, #fb6567 0%, #ec008b 101.5%);
    font-weight: bold;
    color: wheat;
    border-radius: 60px;
    transition: 0.5s ease-in-out;
  }
  .brows a:hover {
    background: linear-gradient(90deg, #fb6567 0%, #ec008b 101.5%);
  }
  .utilitesImg {
    text-align: left !important;
  }
  .utilitesImg img {
  }
  .philosophy {
    margin-top: 40px;
  }
  @media (max-width: 992px) {
    .order2 {
      order: 2;
    }
    .utilitesImg {
      text-align: center !important;
    }
  }
  @media (max-width: 575.98px) {
    .gallery {
      padding: 60px 30px;
    }
    .brows a {
      font-size: 16px;

      padding: 14px 1.5rem;
    }
    .col-md-4 {
      -webkit-flex: 0 0 33.333333%;
      -ms-flex: 0 0 33.333333%;
      flex: 0 0 75.333333%;
      max-width: 98.333333%;
    }

    .col-md-8 {
      flex: 0 0 86.666667%;
      max-width: 86.666667%;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 25.333333%;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 30.333333%;
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: calc((100% - 30px) / 2) !important;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .RaffleImg {
    text-align: right;
    @media (max-width: 992px) {
      text-align: center;

      margin-top: 20px;
    }
  }
  .RaffleImg img {
    width: 70%;
    @media (max-width: 992px) {
      width: 50%;
    }
    @media (max-width: 575.98px) {
      width: 100%;
    }
  }
  .accordion {
    border-radius: 5px;
  }
  .accordion .accordion-item:first-child .title {
  }
  .accordion .accordion-item:last-child .title {
  }
  .accordion .accordion-item .title {
    color: white;
    font-family: "Jost", sans-serif;
    font-weight: 500;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    font-size: 24px;
    line-height: 41px;
    padding: 1.5rem 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0;
    @media (max-width: 575.98px) {
      font-size: 19px;
      padding: 20px 26px;
      line-height: 38px;
    }
  }
  .accordion .accordion-item .title:after {
    content: url("https://api.iconify.design/ant-design/plus-outlined.svg?color=white&width=30&height=30");
    width: 30px;
    height: 30px;
    color: #777;
    float: right;
    margin-left: 5px;
    @media (max-width: 575.98px) {
      content: "";
    }
  }
  .accordion .accordion-item .panel {
    font-family: "Jost", sans-serif;
    max-height: 0;
    -webkit-transition: max-height 0.5s ease-out;
    -o-transition: max-height 0.15s ease-out;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
  }
  .accordion .accordion-item.active .title {
    background-color: transparent;
    color: #fb6468;
  }
  .accordion .accordion-item.active .title:after {
    content: url("https://api.iconify.design/akar-icons/minus.svg?color=red&width=30&height=30");
    @media (max-width: 575.98px) {
      content: "";
    }
  }
  .accordion .accordion-item.active .panel {
    max-height: 700px;
    transition: max-height 0.5s ease-in-out;
  }
  .panel p {
    padding: 0px 31px;
    font-size: 18px;
    line-height: 31px;
    margin-bottom: 20px;
    color: #c0c0c0;
    @media (max-width: 575.98px) {
      padding: 0px 22px;
    }
  }
  .listItem li {
    margin-bottom: 20px;
    color: #c0c0c0;
  }

  .col-md-10 {
    flex: 0 0 75%;
    max-width: 75%;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 1199.98px) {
      max-width: 95%;
      flex: 0 0 95%;
    }
  }
  .collapsed_title {
    text-align: center;
    margin-bottom: 50px;
  }
  .collapsed_title h1 {
    font-size: 55px;
    @media (max-width: 1199.98px) {
      font-size: 47px;
    }
    @media (max-width: 991.98px) {
      font-size: 41px;
    }
    @media (max-width: 767.98px) {
      font-size: 36px;
    }
    @media (max-width: 575.98px) {
      font-size: 31px;
    }
  }
  .row {
    justify-content: center;
  }
  @media (max-width: 575.98px) {
    .listItem {
      padding: 0px 0px 0px 40px;
    }
  }
  .custom-col-10 {
    margin-left: 0%;
  }
`;

export default Wrapper;

/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 100px 0px;
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
      padding: 20px 20px;
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
`;

export default Wrapper;

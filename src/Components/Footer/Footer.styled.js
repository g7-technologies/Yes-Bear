/** @format */

import styled from "styled-components";

const Wrapper = styled.div`
  footer {
    text-align: center;
    padding: 0px 0px 50px 0px;
    background-color: #111232;
    overflow-x: hidden;
  }
  @media (max-width: 575.98px) {
    footer {
      padding: 0px 15px 50px 15px;
    }
  }
  .footer-title {
    p {
      font-size: 32px;
      font-weight: 500;
      color: #c0c0c0;
    }
  }
  .footer-social-icons {
    font-size: 35px;
    padding-top: 20px;
    margin: 20px 0px;
    a {
      margin: 0 8px;
      text-decoration: none;
      color: white;
      display: inline-block;
      transition: 0.5s ease-in-out;
      :hover {
        transform: translateY(-10px);
        color: #24ae4f;
      }
    }
  }
  .content {
  }
  .content p {
    margin-top: 15px;
  }
  .footerText {
  }
  .footerText a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    margin-bottom: 0px;
    display: block;
  }
  .footerText span {
  }
`;

export default Wrapper;

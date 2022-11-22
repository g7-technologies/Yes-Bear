/** @format */
import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Wrapper from "../Components/Mint/Mint.styled";
import Minnav from "../Components/Minnav/Mintnav";
import MintBanner from "../Components/MintBanner/MintBanner";
function Mint() {
  const [Loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !Loading && (
      <div className="main">
        <Layout>
          <header>
            <Minnav />
          </header>
          <Wrapper>
            <MintBanner />
          </Wrapper>
        </Layout>
      </div>
    )
  );
}

export default Mint;

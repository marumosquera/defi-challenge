import React from "react";

//components
import CardContainer from "../../components/CardContainer/CardContainer";

//styles
import "./Home.scss";

const Home = () => {
  return (
    <section className="home-section">
      <div>
        <h1>Transfer crypto</h1>
        <h2>USDC and DAI</h2>
        <CardContainer />
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import Footer from "./Footer";
import Section from "./Section";

function Main() {
  return (
    <div className=" snap snap-y snap-mandatory">
      <Section
        title="Model Y"
        description="2% Company Car Tax. Learn More"
        backgroundImg="model-y.jpg"
        rightBtnText="Custom Order"
        leftBtnText="Explore Inventory"
        id="Model Y"
      />
      <Section
        title="Model 3"
        description="Order Online With Touchless Delivery"
        backgroundImg="model-3.webp"
        rightBtnText="Custom Order"
        leftBtnText="Explore Inventory"
        id="Model 3"
      />
      <Section
        title="Model S"
        description=""
        backgroundImg="model-s.webp"
        rightBtnText="Custom Order"
        leftBtnText="Explore Inventory"
        id="Model S"
      />

      <Section
        title="Solar and Powerwall"
        description="Power Everything"
        backgroundImg="solar-panel.jpg"
        rightBtnText="Order Now"
        leftBtnText="Learn More"
        id="solar-panel"
      />
      <Section
        title="Model X"
        description=""
        backgroundImg="model-x.webp"
        rightBtnText="Custom Order"
        leftBtnText="Explore Inventory"
        id="Model X"
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        rightBtnText="Order Now"
        leftBtnText="Learn More"
        id="solar-roof"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        id="accessories"
      />
      <Footer />
    </div>
  );
}

export default Main;

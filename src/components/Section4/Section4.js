import React from "react";
import "./Section4.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Section4() {
  return (
    <div className="section4">
      <div
        style={{
          backgroundImage: `url("/images/section4.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
          marginTop: "-50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          paddingLeft: "17%",
          paddingRight: "17%",
        }}
      >
        <div className="section4__content">
          <h1>OnePlus 9 Pro 5G</h1>
          <h3>Add a OnePlus Buds Z/ OnePlus Band for just ₹999.</h3>
          <br />
          <h3>From ₹61 999*</h3>
          <h3>*Incl. offer on HDFC Bank Cards. T&C apply.</h3>
          <div className="section4__leftContainerButton1">Buy Now</div>
          <div className="section4__leftContainerButton">
            <a>Learn more</a>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;

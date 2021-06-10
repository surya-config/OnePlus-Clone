import React from "react";
import "./Section2.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Section2() {
  return (
    <div className="section2">
      <div
        style={{
          backgroundImage: `url("/images/section2.jpg")`,
          backgroundSize: "cover",
          height: "80vh",
          marginTop: "-20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          paddingLeft: "17%",
          paddingRight: "17%",
        }}
      >
        <div className="section2__content">
          <h1>OnePlus 9R 5G</h1>
          <h3>Add a OnePlus Buds Z/ OnePlus Band for just ₹999.</h3>
          <br />
          <h3>From ₹37 999*</h3>
          <h3>*Incl. offer on HDFC Bank Cards. T&C apply.</h3>
          <div className="section2__leftContainerButton1">Buy Now</div>
          <div className="section2__leftContainerButton">
            <a>Learn more</a>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;

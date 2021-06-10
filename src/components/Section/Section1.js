import React from "react";
import "./Section1.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Section1() {
  return (
    <div className="section1">
      <div
        style={{
          backgroundImage: `url("/images/banner.jpg")`,
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
        <div className="section1__content">
          <h1>OnePlus Summer Launch Event</h1>
          <h3>OnePlus Nord CE 5G &</h3>
          <h3>OnePlus TV U1S launches Today, 7 PM</h3>
          <div className="section1__leftContainerButton">
            <a>Watch the Launch</a>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;

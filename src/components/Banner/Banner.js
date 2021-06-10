import React from "react";
import "./Banner.css";
import Carousel from "react-material-ui-carousel";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Banner({ selectedItem, setSelectedItem }) {
  return (
    <div>
      <Carousel
        animation="slide"
        timeout="500"
        autoPlay="true"
        indicatorIconButtonProps={{
          style: {
            color: "#b2b2b2", // 3
            width: "20px",
            height: "2px",
            borderRadius: 0,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "white", // 2
          },
        }}
        indicatorContainerProps={{
          style: {
            marginTop: "-60px", // 5
          },
        }}
      >
        <div
          style={{
            backgroundImage: `url("/images/slide1.jpg")`,
            backgroundSize: "cover",
            height: "370px",
            marginTop: "-20px",
            display: "flex",
            flex: 1,
          }}
        >
          <div className="slide__content">
            <h1>OnePlus Nord CE 5G</h1>
            <h2>
              64 MP triple camera, Warp Charge 30T Plus and a big 4500 mAh
              battery.
            </h2>
            <h2>Launch event Today, 7 PM.</h2>
            <div className="slide__contentButton">
              <a>Watch the Launch</a>
              <ChevronRightIcon />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url("/images/slide2.jpg")`,
            height: "350px",
            marginTop: "-20px",
            display: "flex",
            flex: 1,
            objectFit: "cover",
            width: "100%",
          }}
        >
          <div className="slide__content1">
            <h1>OnePlus 9 Series 5G </h1>
            <h2>Add a OnePlus Buds Z / OnePlus Band for just ₹999.</h2>
            <h2>A limited period offer. </h2>
            <div className="slide__contentButton1">Buy Now</div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url("/images/slide3.jpg")`,
            height: "350px",
            marginTop: "-20px",
            display: "flex",
            flex: 1,
          }}
        >
          <div className="slide__content2">
            <h1>OnePlus TV 40Y1</h1>
            <h2>Imagination & Intelligence.</h2>
            <h2>
              ₹23 999 <span>₹27 999</span>{" "}
            </h2>
            <div className="slide__contentButton2">Buy Now</div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

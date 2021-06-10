import React, { useState } from "react";
import "./Header.css";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { IconButton } from "@material-ui/core";
import Banner from "../Banner/Banner";

function Header() {
  const navItems = [
    {
      heading: "Phone",
    },
    {
      heading: "TV",
    },
    {
      heading: "Store",
    },
    {
      heading: "About",
    },
    {
      heading: "Support",
    },
    {
      heading: "Community",
    },
    {
      heading: "Find a store",
    },
  ];

  const items = {
    Phone: [
      {
        image: "/images/phone1.jpg",
        name: "OnePlus 9 Pro 5G",
      },
      {
        image: "/images/phone2.jpg",
        name: "OnePlus 9 5G",
      },
      {
        image: "/images/phone3.jpg",
        name: "OnePlus 9R 5G",
      },
      {
        image: "/images/phone4.jpg",
        name: "OnePlus 8T",
      },
      {
        image: "/images/phone5.jpg",
        name: "OnePlus Nord",
      },
      {
        image: "/images/phone6.jpg",
        name: "OnePlus 8 Pro",
      },
    ],
    TV: [
      {
        image: "/images/tv1.jpg",
        name: "OnePlus TV U1S",
      },
      {
        image: "/images/tv2.jpg",
        name: "OnePlus TV Q1 Series",
      },
      {
        image: "/images/tv3.jpg",
        name: "OnePlus TV U Series U1 ",
      },
    ],
    Store: [
      {
        image: "/images/store1.jpg",
        name: "Phone",
      },
      {
        image: "/images/store2.jpg",
        name: "TV",
      },
      {
        image: "/images/store3.jpg",
        name: "Audio",
      },
      {
        image: "/images/store4.jpg",
        name: "Wearables",
      },
      {
        image: "/images/store5.jpg",
        name: "Gear",
      },
      {
        image: "/images/store6.jpg",
        name: "Cases & Protection",
      },
      {
        image: "/images/store7.jpg",
        name: "Power & Cables",
      },
      {
        image: "/images/store8.jpg",
        name: "Bundles",
      },
    ],
  };

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div>
      <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src="/images/oneplus_logo.png" alt="ONEPLUS" />
          </div>

          <div className="header__main">
            {navItems.map((item, idx) => (
              <div
                className="nav__item"
                onMouseEnter={() => {
                  setSelectedItem(item.heading);
                  setShow(true);
                }}
              >
                <h5>{item.heading}</h5>
                {item.sub && <h6>{item.sub}</h6>}
              </div>
            ))}
          </div>

          <div className="header__right">
            <IconButton>
              <AccountCircleOutlinedIcon />
            </IconButton>
            <IconButton>
              <LocalMallOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="hoveredItem"></div>
      </div>
      {(show === false && selectedItem === "") ||
      selectedItem === "About" ||
      selectedItem === "Support" ||
      selectedItem === "Community" ||
      selectedItem === "Find a store" ? (
        <Banner />
      ) : (
        <div
          className="itemContainer"
          onMouseLeave={() => {
            setSelectedItem("");
            setShow(false);
          }}
        >
          <div className="items__row">
            {items[selectedItem]?.map((item, index) => (
              <div
                className="item_row"
                onMouseEnter={() => setSelectedItem(selectedItem)}
                onMouseLeave={() => {
                  if (
                    selectedItem !== "Phone" &&
                    selectedItem !== "TV" &&
                    selectedItem !== "Store"
                  ) {
                    setSelectedItem("");
                  }
                }}
              >
                <figure
                  style={{
                    width:
                      (selectedItem === "Phone" && "150px") ||
                      (selectedItem === "TV" && "200px") ||
                      (selectedItem === "Store" && "150px"),
                    height:
                      (selectedItem === "Phone" && "200px") ||
                      (selectedItem === "TV" && "250px") ||
                      (selectedItem === "Store" && "200px"),
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                    marginRight: "40px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <figcaption>{item.name}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

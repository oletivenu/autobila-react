import React, { Component, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";

function TypeCars(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const items = props.items;
  return (
    <div className="container">
      <div style={{ padding: "15px 25px", maxWidth: 2000, margin: "0 auto" }}>
        <ItemsCarousel
          placeholderItem={<div style={{ height: 200, background: "#EEE" }} />}
          enablePlaceholder={true}
          numberOfPlaceholderItems={8}
          numberOfCards={4}
          gutter={12}
          slidesToScroll={2}
          chevronWidth={60}
          outsideChevron={true}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={activeItemIndex}
          requestToChangeActive={setActiveItemIndex}
          rightChevron={">"}
          leftChevron={"<"}
        >
          {items.map((item) => (
            <Link key={item.Id} to={"/auto/" + item.Id}>
              <div>
                <img
                  style={{
                    height: 200,
                  }}
                  src={"uploads/" + item.FirstImage}
                  alt={item.AutoName}
                />
              </div>
            </Link>
          ))}
        </ItemsCarousel>
      </div>
    </div>
  );
}

export default TypeCars;

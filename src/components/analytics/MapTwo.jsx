import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from '@react-jvectormap/world'
;
import React from "react";

function MapTwo() {
  return (

    <div className="maptwo m-auto  h-[300px] md:h-[400px]" >
      <VectorMap
        map={worldMill}
        backgroundColor='white dark:#1C2434'
        regionStyle={{
          initial: {
            fill: "#A9BDFF", // Initial fill color of regions
            "fill-opacity": 1,
            stroke: "#FFFFFF", // Border color
            "stroke-width": 1.5, // Border width
            "stroke-opacity": 1,
          },
          hover: {
            fill: "#3056D3", // Fill color when hovered
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
        }}
       
        onRegionTipShow={(event, label) => {
          // Change the tooltip background color
          label.html(`
            <div style="background-color: #3056D3; border-radius: 4px; color: white; padding: 13px 35px; border: none;">
              <p>${label.html()}</p>
            </div>`);

          // Change the background color of the hovered region
          label.parent().css("background-color", "#3056D3");
        }}
      />
    </div>
  );
}

export default MapTwo;

import { VectorMap } from "@react-jvectormap/core";
import { usAea } from "@react-jvectormap/unitedstates";
import React from "react";

function Map() {
  return (

    <div className="mapone m-auto  h-[300px] md:h-[400px]" >
      <VectorMap
        map={usAea}
        backgroundColor='white dark:#1C2434'
        regionStyle={{
          initial: {
            fill: "#C8D0D8", // Initial fill color of regions
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
        labels={{
          regions: {
            render: function (code) {
              // Define short form mappings
              const shortForms = {
                "US-CA": "CA",
                "US-TX": "TX",
                // Add more mappings for other regions as needed
              };

              // Get the short form of the region name
              const shortForm = shortForms[code];

              return shortForm ? shortForm : code.replace("US-", ""); // Remove "US-" prefix
            },
            offsets: function (code) {
              // Define offsets for better label positioning (if needed)
              // You can adjust these as necessary
              return [0, 0];
            },
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

export default Map;

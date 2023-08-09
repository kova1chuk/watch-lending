import React, { useEffect, useState } from "react";

import CollapseChessBoardItem from "./CollapseChessBoardItem";
import RowChessBoardItem from "./RowChessBoardItem";
import { AdvantageData } from "./types";

const DescriptionChessboard = ({
  advantagesData,
}: {
  advantagesData: AdvantageData[];
}) => {
  const [isMobileView, setIsMobileView] = useState(false);

  // Update the isMobileView state on window resize
  const handleWindowResize = () => {
    setIsMobileView(window.innerWidth < 555);
  };

  useEffect(() => {
    handleWindowResize(); // Check the initial width
    window.addEventListener("resize", handleWindowResize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
      {advantagesData.map((advantage, index) =>
        !isMobileView ? (
          <RowChessBoardItem key={index} index={index} advantage={advantage} />
        ) : (
          <CollapseChessBoardItem
            key={index}
            index={index}
            advantage={advantage}
          />
        )
      )}
    </div>
  );
};

export default DescriptionChessboard;

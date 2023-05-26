import React from "react";
import { Panel } from "./Styles";
import AddPoints from "../addPoints";

const PanelPoints = () => {
  const pointsValues = [1000, 5000, 7500];

  return (
    <Panel>
      {pointsValues.map((amount) => {
        return <AddPoints key={amount} amount={amount}></AddPoints>;
      })}
    </Panel>
  );
};

export default PanelPoints;

import React from "react"
import { Panel } from "./Styles"
import AddPoints from "../addPoints"

const PanelPoints = ({ isMobile }) => {
  const pointsValues = [1000, 5000, 7500]

  return (
    <Panel mobile={isMobile}>
      {pointsValues.map((amount) => {
        return <AddPoints key={amount} amount={amount}></AddPoints>
      })}
    </Panel>
  )
}

export default PanelPoints

import React from "react"
import { HistorySection } from "./Styles"
import { useSelector } from "react-redux"
import { formatDate } from "../../utils/dateformat"
import { LoadedAnimation } from "../../styles/LoadedAnimation"
import { LoadingScreen } from "../../styles/LoadingScreen"
import { Spinner } from "../addPoints/Styles"

const History = ({ isLoading }) => {
  const userInfo = useSelector((state) => state.user)
  const historyArray = Array.prototype.concat
    .apply([], userInfo.dataUser.redeemHistory)
    .sort((a, b) => new Date(b.createDate) - new Date(a.createDate))

  return (
    <>
      <LoadedAnimation isLoading={isLoading}>
        {!isLoading &&
          historyArray.map((item) => {
            return (
              <HistorySection key={item._id + item.createDate}>
                <img src={item.img.url} alt="" />
                <div>
                  <span>{item.category}</span>
                  <p>{item.name}</p>
                </div>
                <div>
                  <span>{item.name}</span>
                  <p>{item.category}</p>
                </div>
                <div>
                  <span>Redeemed on</span>
                  <p>{formatDate(item.createDate)}</p>
                </div>
                <div>
                  <span>Points</span>
                  <p>{item.cost}</p>
                </div>
              </HistorySection>
            )
          })}
      </LoadedAnimation>
      <LoadingScreen isLoading={isLoading}>
        <Spinner>
          <div></div>
          <h1>Page loading...</h1>
        </Spinner>
      </LoadingScreen>
    </>
  )
}

export default History

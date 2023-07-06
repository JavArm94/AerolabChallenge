import "./App.css";
import Navbar from "./containers/navbar/Navbar";
import { createGlobalStyle } from "styled-components";
import { Vars } from "./styles/Variables";
import ProductSection from "./containers/productSection";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./components/history";
import PanelPoints from "./components/panelPoints";

const GlobalStyle = createGlobalStyle`
body{
  min-height: 100vh;  
  max-width: 1200px;
  margin: auto;
  padding: 20px;background-color:${Vars.backgroundColor}
}
`;

function App() {
  const userState = useSelector((state) => state.user);
  const productsState = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userState.dataUser.points) {
      setIsLoading(false);
    }
    console.log(isLoading);
  }, [productsState, userState]);

  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar isLoading={isLoading}></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductSection isLoading={isLoading}></ProductSection>{" "}
            </>
          }
        ></Route>
        <Route
          path="/history"
          element={<History isLoading={isLoading}></History>}
        ></Route>
      </Routes>
    </Router>
  );
}

/**   <Route
          path="/"
          element={
            <>
              <ContentContainer></ContentContainer>
            </>
          }
        ></Route> */

export default App;

/*
The user should be able to sort products by price, from highest to lowest, and vice-versa.
The user should be able to see how many points they have in their account.
There should be a clear way for the user to distinguish those products that they can redeem from those they cannot.
A “Redeem” button should be available for those products that the user has enough points to claim.
A “Redeem now” option should appear when the user interacts with a product that they have enough points to claim.
When the user doesn’t have enough points for a product, they should be able to see how many more points they need to claim it.
The user should not be able to redeem a product for which they don’t have enough points.
When the user clicks on the Redeem now button, the system should automatically deduct the item’s price from the users’ points.
*/

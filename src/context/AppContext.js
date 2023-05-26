import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { end_point } from "./constrains";

const initialState = {
  records_loading: false,
  records_error: false,
  records: [],
  single_record_loading: true,
  single_record_error: false,
  single_record: {},
  extra_info: {},
  extra_info_error: false,
  extra_info_loading: false,
  genres: [],
  genre_error: false,
  lastPage: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUser = async () => {
    await axios
      .get(end_point + "user/me", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const { name, points, redeemHistory, _id: id } = response.data;
          setUser({ name, points, redeemHistory, id });
          localStorage.setItem(
            "user",
            JSON.stringify({ name, points, redeemHistory, id })
          );
          return response;
        } else {
          localStorage.setItem("user", JSON.stringify({}));
          return response;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchUserLocal = () => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      fetchUser();
    }
  };

  useEffect(() => {
    fetchUserLocal();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

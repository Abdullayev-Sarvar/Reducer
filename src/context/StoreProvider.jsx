import React from 'react';
import { useReducer } from "react";
import ProjectStore from "./store";
import { InitialState, reducer } from "./reduces";

const StoreProvider = ({ children }) => {
  return (
    <ProjectStore.Provider value={useReducer(reducer, InitialState)}>
      {children}
    </ProjectStore.Provider>
  );
};

export default StoreProvider;

import React from "react";
import { initialState, Reducer } from "./Reducer";

export const DataLayerContext = React.createContext();

export default function DataLayerContextProvider({ children }) {
  const [dataLayer, dispatch] = React.useReducer(Reducer, initialState);

  return (
    <DataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </DataLayerContext.Provider>
  );
}

export const useDataLayerContextValue = () =>
  React.useContext(DataLayerContext);

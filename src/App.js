import React, { createContext, useReducer } from "react";
import Home from "./pages/home/Home";
import { appReducer, initial } from "./reducer/appReducer";

export const DataContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(appReducer, initial);

  return (
    <>
      <DataContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Home />
      </DataContext.Provider>
    </>
  );
};

export default App;

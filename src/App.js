import React, { createContext, useReducer } from "react";
import Home from "./pages/home/Home";
import { appReducer, initial } from "./reducer/appReducer";
import { useMediaQuery } from "react-responsive";

export const DataContext = createContext();
const App = () => {
  const [state, dispatch] = useReducer(appReducer, initial);
  const isMobile = useMediaQuery({
    query: "(min-width: 600px)",
  });

  return (
    <>
      <DataContext.Provider
        value={{
          state: state,
          dispatch: dispatch,
          mediaQuery: { mobile: isMobile },
        }}
      >
        <Home />
      </DataContext.Provider>
    </>
  );
};

export default App;

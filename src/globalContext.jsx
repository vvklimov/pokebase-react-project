import { createContext, useContext, useState } from "react";
const initialState = {
  showCard: false,
  activeCardIndex: 0,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showCard, setShowCard] = useState(initialState.showCard);
  const [activeCardIndex, setActiveCardIndex] = useState(
    initialState.activeCardIndex
  );
  return (
    <AppContext.Provider
      value={{ showCard, activeCardIndex, setShowCard, setActiveCardIndex }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

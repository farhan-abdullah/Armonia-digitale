import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const sectionARef = useRef(null);
  const sectionBRef = useRef(null);
  const sectionCRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ sectionARef, sectionBRef, sectionCRef }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScrollContext = () => useContext(ScrollContext);

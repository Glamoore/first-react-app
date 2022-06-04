import React, { createContext, useState } from "react";

export const MenuContext = createContext({
  isOpen: false,
  toggle: () => {},
});

export const MenuProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => setisOpen(!isOpen);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggle,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

import React, { useState } from "react";

const initialState = {
  displayLinkDrawer: false,
  displayCartDrawer: false,
};

export const UIContext = React.createContext(initialState);

export const UIProvider = ({ children }) => {
  const [uiState, setUiState] = useState(initialState);
  const openLinkDrawer = () =>
    setUiState({ ...uiState, displayLinkDrawer: true });
  const closeLinkDrawer = () =>
    setUiState({ ...uiState, displayLinkDrawer: false });
  const toggleLinkDrawer = () =>
    setUiState((prev) => {
      return { ...prev, displayLinkDrawer: !prev.displayLinkDrawer };
    });

  const openCartDrawer = () => {
    return setUiState({ ...uiState, displayCartDrawer: true });
  };
  const closeCartDrawer = () =>
    setUiState({ ...uiState, displayCartDrawer: false });
  const toggleCartDrawer = () =>
    setUiState((prev) => {
      return { ...prev, displayCartDrawer: !prev.displayCartDrawer };
    });

  const value = {
    ...uiState,
    openLinkDrawer,
    closeLinkDrawer,
    toggleLinkDrawer,
    openCartDrawer,
    closeCartDrawer,
    toggleCartDrawer,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

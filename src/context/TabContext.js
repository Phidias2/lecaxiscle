import { createContext, useContext, useState } from 'react';

export const TabVisibilityContext = createContext();

export const TabVisibilityProvider = ({ children }) => {
    const [isTabVisible, setIsTabVisible] = useState(true);
  
    return (
      <TabVisibilityContext.Provider value={{ isTabVisible, setIsTabVisible }}>
        {children}
      </TabVisibilityContext.Provider>
    );
  };
  
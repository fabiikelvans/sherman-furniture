import React, { createContext, useContext, useState } from "react";

const CursorContext = createContext({
    bindHoverable: () => ({}),
    hoveredElement: null
});

export function CursorContextProvider({ children }) {
    const [hoveredElement, setHoveredElement] = useState(null);

    return (
        <CursorContext.Provider
            value={{
                bindHoverable() {
                    return {
                        onMouseEnter: event => setHoveredElement(event.currentTarget),
                        onMouseLeave: () => setHoveredElement(null)
                    };
                },
                hoveredElement
            }}
        >
            {children}
        </CursorContext.Provider>
    );
}

export function useCursorContext() {
    return useContext(CursorContext);
}

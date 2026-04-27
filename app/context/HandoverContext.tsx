"use client";

import { createContext, useContext, useState } from "react";


// ------------------------------------------------------------
// ## 🧠 CONTEXT SHAPE — defines what data is shared globally
// ------------------------------------------------------------
const HandoverContext = createContext(null);


// ------------------------------------------------------------
// ## 🧩 PROVIDER — wraps the app and stores all summaries
// ------------------------------------------------------------
export function HandoverProvider({ children }) {
  const [summaries, setSummaries] = useState([]);

  return (
    <HandoverContext.Provider value={{ summaries, setSummaries }}>
      {children}
    </HandoverContext.Provider>
  );
}


// ------------------------------------------------------------
// ## 🔌 HOOK — used by pages to access shared data
// ------------------------------------------------------------
export function useHandover() {
  return useContext(HandoverContext);
}

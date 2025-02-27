"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ClaimContextType {
  claims: any[];
  addClaim: (claim: any) => void;
}

const ClaimContext = createContext<ClaimContextType | undefined>(undefined);

export const ClaimProvider = ({ children }: { children: ReactNode }) => {
  const [claims, setClaims] = useState<any[]>([]);

  const addClaim = (claim: any) => {
    setClaims([...claims, claim]);
  };

  return (
    <ClaimContext.Provider value={{ claims, addClaim }}>
      {children}
    </ClaimContext.Provider>
  );
};

// Custom hook for easier use
export const useClaimContext = () => {
  const context = useContext(ClaimContext);
  if (!context) {
    throw new Error("useClaimContext must be used within a ClaimProvider");
  }
  return context;
};

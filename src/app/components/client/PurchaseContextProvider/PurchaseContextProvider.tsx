"use client";

import PurchaseForm from "../PurchaseForm/PurchaseForm";
import { PurchaseType } from "@/lib/utils";
import { createContext, useContext, useState } from "react";

interface PurchaseContextProps {
  purchase: PurchaseType;
  isOpenForm: boolean;
  isInsertMode: boolean;
  setPurchase: (purchase: PurchaseType) => void;
  setIsOpenForm: (value: boolean) => void;
  setIsInsertMode: (value: boolean) => void;
}

export const defaultPurchase = {
  pid: 0,
  p_name: "",
  p_date: "",
  p_from: "",
  p_type: "",
  remark: "",
  p_price: 0,
  part_sub: "",
  thickness: 0,
  part_body: "",
  brand_info: "",
  brand_name: "",
  description: "",
};

const PurchaseContext = createContext<PurchaseContextProps>({
  isOpenForm: false,
  isInsertMode: false,
  purchase: defaultPurchase,
  setPurchase: (purchase: PurchaseType) => {},
  setIsOpenForm: (value: boolean) => {},
  setIsInsertMode: (value: boolean) => {},
});

export const PurchaseContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [purchase, setPurchase] = useState<PurchaseType>(defaultPurchase);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isInsertMode, setIsInsertMode] = useState(false);

  return (
    <PurchaseContext.Provider
      value={{ isOpenForm, purchase, isInsertMode, setPurchase, setIsOpenForm, setIsInsertMode }}
    >
      <PurchaseForm />
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchaseContext = () => useContext(PurchaseContext);

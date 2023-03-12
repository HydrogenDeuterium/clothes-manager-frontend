"use client";

import { AiOutlinePlusCircle } from "react-icons/ai";

import { usePurchaseContext, defaultPurchase } from "../PurchaseContextProvider/PurchaseContextProvider";

export default function AddButton() {
  const { setIsOpenForm, setIsInsertMode, setPurchase } = usePurchaseContext();

  return (
    <button
      type='button'
      aria-label='add button'
      onClick={() => {
        setPurchase(defaultPurchase);
        setIsInsertMode(true);
        setIsOpenForm(true);
        document.body.style.overflow = "hidden";
      }}
      className='text-slate-600 hover:text-slate-800 flex flex-row gap-1 items-center'
    >
      添加
      <AiOutlinePlusCircle size={17} />
    </button>
  );
}

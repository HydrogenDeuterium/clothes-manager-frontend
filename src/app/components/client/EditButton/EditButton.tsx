"use client";

import { MdModeEditOutline } from "react-icons/md";

import { PurchaseType } from "@/lib/utils";
import { usePurchaseContext } from "../PurchaseContextProvider/PurchaseContextProvider";

export default function EditButton({ purchase }: { purchase: PurchaseType }) {
  const { setIsOpenForm, setIsInsertMode, setPurchase } = usePurchaseContext();

  return (
    <button
      onClick={() => {
        setPurchase(purchase);
        setIsInsertMode(false);
        setIsOpenForm(true);
        document.body.style.overflow = "hidden";
      }}
      type='button'
      aria-label='edit button'
      className='text-slate-700 hover:text-slate-800'
    >
      <MdModeEditOutline />
    </button>
  );
}

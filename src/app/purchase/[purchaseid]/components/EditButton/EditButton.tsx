"use client";

import { ObjectType } from "@/lib/utils";
import { MdModeEditOutline } from "react-icons/md";

import { useObjectContext } from "../ObjectContextProvider/ObjectContextProvider";

export default function EditButton({ purchaseid, object }: { purchaseid: number; object: ObjectType }) {
  const { setIsOpenForm, setIsInsertMode, setObject, setPurchaseid } = useObjectContext();

  return (
    <button
      onClick={() => {
        setPurchaseid(purchaseid);
        setObject(object);
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

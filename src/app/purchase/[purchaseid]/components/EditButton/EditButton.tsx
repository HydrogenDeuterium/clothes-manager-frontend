"use client";

import { ObjectType } from "@/lib/utils";
import { MdModeEditOutline } from "react-icons/md";

import { useObjectContext } from "../../../../components/client/ObjectContextProvider/ObjectContextProvider";

export default function EditButton({ object }: { object: ObjectType }) {
  const { setIsOpenForm, setIsInsertMode, setObject } = useObjectContext();

  return (
    <button
      onClick={() => {
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

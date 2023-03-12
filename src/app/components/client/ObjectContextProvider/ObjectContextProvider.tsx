"use client";

import ObjectForm from "./ObjectForm";
import { ObjectType } from "@/lib/utils";
import { createContext, useContext, useState } from "react";

interface ObjectContextProps {
  object: ObjectType;
  isOpenForm: boolean;
  isInsertMode: boolean;
  purchaseid: number;
  setPurchaseid: (value: number) => void;
  setObject: (object: ObjectType) => void;
  setIsOpenForm: (value: boolean) => void;
  setIsInsertMode: (value: boolean) => void;
}

export const defaultObject = {
  pid: 0,
  oid: 0,
  broken_date: "",
  broken_info: "",
  color: "",
  description: "",
  location: "",
  o_name: "",
  time_create: "",
  time_update: "",
};

const ObjectContext = createContext<ObjectContextProps>({
  isOpenForm: false,
  isInsertMode: false,
  object: defaultObject,
  purchaseid: 0,
  setPurchaseid: (value: number) => {},
  setObject: (object: ObjectType) => {},
  setIsOpenForm: (value: boolean) => {},
  setIsInsertMode: (value: boolean) => {},
});

export const ObjectContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [object, setObject] = useState<ObjectType>(defaultObject);
  const [purchaseid, setPurchaseid] = useState(0);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isInsertMode, setIsInsertMode] = useState(false);

  return (
    <ObjectContext.Provider
      value={{ isOpenForm, object, isInsertMode, purchaseid, setPurchaseid, setObject, setIsOpenForm, setIsInsertMode }}
    >
      <ObjectForm />
      {children}
    </ObjectContext.Provider>
  );
};

export const useObjectContext = () => useContext(ObjectContext);

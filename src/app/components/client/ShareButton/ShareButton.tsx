"use client";

import Link from "next/link";
import { TiArrowForward } from "react-icons/ti";

import { useObjectContext } from "../ObjectContextProvider/ObjectContextProvider";

export default function ShareButton({ purchaseid }: { purchaseid: number }) {
  const { setPurchaseid } = useObjectContext();

  return (
    <Link
      aria-label='detail link'
      onClick={() => setPurchaseid(purchaseid)}
      href={`/purchase/` + purchaseid}
      className='text-slate-700 hover:text-slate-800'
    >
      <TiArrowForward size={20} />
    </Link>
  );
}

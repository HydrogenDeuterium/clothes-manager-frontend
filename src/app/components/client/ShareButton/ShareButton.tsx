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
      className='h-full w-8 flex items-center justify-center duration-300 hover:bg-green-700 bg-green-600 text-white rounded-md'
    >
      <TiArrowForward size={20} />
    </Link>
  );
}

import Link from "next/link";
import { TiArrowForward } from "react-icons/ti";
import { BsChevronCompactDown } from "react-icons/bs";

import { timeAgo } from "@/lib/utils";
import { PurchaseType } from "@/lib/utils";

import { EditButton } from "../../client";
import style from "./PurchaseCard.module.css";

export default function PurchaseCard({ purchase, index }: { purchase: PurchaseType; index: number }) {
  return (
    <li className={style.card}>
      <input id={String(purchase.pid)} type='checkbox' style={{ display: "none" }} />

      <div className='flex flex-col md:flex-row purchases-center justify-between'>
        <div className='flex flex-row purchases-center justify-start gap-2'>
          <span className='h-6 w-6 rounded-full font-bold bg-emerald-600 text-white flex purchases-center justify-center'>
            {index + 1}
          </span>
          <span className='text-slate-700 font-semibold'>
            {purchase.p_name}({timeAgo(purchase.p_date)})
          </span>
          <span className='bg-purple-300 px-1' style={{ borderRadius: "40% 30% 50% 40%" }}>
            {purchase.part_body}
          </span>
          <span className='bg-yellow-300 px-1' style={{ borderRadius: "40% 30% 50% 40%" }}>
            {purchase.part_sub}
          </span>
        </div>

        <div className='flex flex-row items-center justify-end gap-1'>
          <EditButton purchase={purchase} />
          <Link
            aria-label='detail link'
            href={`/purchase/` + purchase.pid}
            className='text-slate-700 hover:text-slate-800'
          >
            <TiArrowForward size={20} />
          </Link>
          <label htmlFor={String(purchase.pid)} className='cursor-pointer'>
            <BsChevronCompactDown />
          </label>
        </div>
      </div>

      <div className={style.detail}>
        <div>
          <span className={style.label}>购买介绍：</span>
          <span>{purchase.description}</span>
        </div>
        <div>
          <span className={style.label}>购买价格：</span>
          <span>{purchase.p_price}</span>
        </div>
        <div>
          <span className={style.label}>购买地点：</span>
          <span>{purchase.p_from}</span>
        </div>
        <div>
          <span className={style.label}>购买备注：</span>
          <span>{purchase.remark}</span>
        </div>
        <div>
          <span className={style.label}>衣物厚度：</span>
          <span>{purchase.thickness}</span>
        </div>
      </div>
    </li>
  );
}

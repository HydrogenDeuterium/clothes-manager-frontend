"use client";

import { useRouter } from "next/navigation";

import { joinBackendUrl } from "@/lib/utils";
import { usePurchaseContext } from "../PurchaseContextProvider/PurchaseContextProvider";
import style from "./PurchaseForm.module.css";

export default function PurchaseForm() {
  const router = useRouter();
  const { purchase, setPurchase, isOpenForm, setIsOpenForm, isInsertMode } = usePurchaseContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const url = joinBackendUrl([`purchases`, isInsertMode ? "" : String(purchase.pid)]);

    fetch(url, {
      method: isInsertMode ? "POST" : "PUT",
      body: JSON.stringify(purchase),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) router.refresh();
        setIsOpenForm(false);
        document.body.style.overflow = "auto";
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <section
      aria-label='purchase form'
      className={[style.window, "frame", isOpenForm ? "scale-100" : "scale-0"].join(" ")}
    >
      <form onSubmit={handleSubmit} className={[style.form, isOpenForm ? "scale-100" : "scale-0"].join(" ")}>
        <h1 className='text-xl font-semibold text-gray-700 mb-3 border-b-4 border-emerald-600'>
          {isInsertMode ? "添加" : "更新"}购买记录
        </h1>

        <div className='w-full grid grid-cols-3 gap-2'>
          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='p_name' className={style.label}>
              购买名称
            </label>
            <input
              required
              id='p_name'
              name='p_name'
              maxLength={100}
              placeholder='购买名称'
              value={purchase.p_name}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='p_price' className={style.label}>
              购买价格
            </label>
            <input
              required
              id='p_price'
              name='p_price'
              type='number'
              min={0}
              value={purchase.p_price}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='thickness' className={style.label}>
              衣物厚度
            </label>
            <input
              required
              id='thickness'
              name='thickness'
              type='number'
              min={0}
              value={purchase.thickness}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='p_from' className={style.label}>
              购买地点
            </label>
            <input
              required
              id='p_from'
              name='p_from'
              maxLength={100}
              placeholder='购买地点'
              value={purchase.p_from}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='brand_name' className={style.label}>
              品牌名称
            </label>
            <input
              required
              id='brand_name'
              name='brand_name'
              maxLength={100}
              placeholder='品牌名称'
              value={purchase.brand_name}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='brand_info' className={style.label}>
              品牌信息
            </label>
            <input
              required
              id='brand_info'
              name='brand_info'
              maxLength={100}
              placeholder='品牌信息'
              value={purchase.brand_info}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='part_body' className={style.label}>
              穿着部位
            </label>
            <input
              required
              id='part_body'
              name='part_body'
              maxLength={100}
              placeholder='穿着部位'
              value={purchase.part_body}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='part_sub' className={style.label}>
              购买类型
            </label>
            <input
              required
              id='part_sub'
              name='part_sub'
              maxLength={100}
              placeholder='购买类型'
              value={purchase.part_sub}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='p_type' className={style.label}>
              衣物类型
            </label>
            <input
              required
              id='p_type'
              name='p_type'
              maxLength={100}
              placeholder='衣物类型'
              value={purchase.p_type}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='remark' className={style.label}>
              添加标签
            </label>
            <input
              required
              id='remark'
              name='remark'
              maxLength={100}
              placeholder='添加标签'
              value={purchase.remark}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='p_date' className={style.label}>
              购买日期
            </label>
            <input
              required
              id='p_date'
              name='p_date'
              type='datetime-local'
              placeholder='购买日期'
              value={purchase.p_date}
              className={style.input}
              onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
            />
          </div>
        </div>

        <div className='flex flex-col w-full gap-1'>
          <label htmlFor='description' className={style.label}>
            描述介绍
          </label>
          <textarea
            required
            id='description'
            name='description'
            maxLength={1000}
            placeholder='描述介绍'
            value={purchase.description}
            className={[style.input, "h-24"].join(" ")}
            onChange={(e) => setPurchase({ ...purchase, [e.target.name]: e.target.value })}
          />
        </div>
        <div className='w-full flex flex-row gap-3'>
          <button
            type='button'
            onClick={() => {
              setIsOpenForm(false);
              document.body.style.overflow = "auto";
            }}
            className={style.actionbtn}
          >
            取消
          </button>
          <button
            type='submit'
            className={[style.actionbtn, style.actionbtnsubmit, "bg-emerald-600 text-white"].join(" ")}
          >
            {isInsertMode ? "添加" : "更新"}
          </button>
        </div>
      </form>
    </section>
  );
}

"use client";

import { useRouter } from "next/navigation";

import style from "./ObjectForm.module.css";
import { joinBackendUrl } from "@/lib/utils";
import { useObjectContext } from "./ObjectContextProvider";

export default function ObjectForm() {
  const router = useRouter();
  const { object, setObject, purchaseid, isOpenForm, setIsOpenForm, isInsertMode } = useObjectContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const url = isInsertMode
      ? joinBackendUrl(["purchases", purchaseid.toString(), "objects"])
      : joinBackendUrl(["objects", object.oid.toString()]);

    fetch(url, {
      method: isInsertMode ? "POST" : "PUT",
      body: JSON.stringify(object),
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
      aria-label='object form'
      className={[style.window, "frame", isOpenForm ? "scale-100" : "scale-0"].join(" ")}
    >
      <form onSubmit={handleSubmit} className={[style.form, isOpenForm ? "scale-100" : "scale-0"].join(" ")}>
        <h1 className='text-xl font-semibold text-gray-700 mb-3 border-b-4 border-emerald-600'>
          {isInsertMode ? "添加" : "更新"}衣物记录
        </h1>

        <div className='w-full grid grid-cols-3 gap-2'>
          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='o_name' className={style.label}>
              衣物名称
            </label>
            <input
              required
              id='o_name'
              name='o_name'
              maxLength={100}
              placeholder='衣物名称'
              value={object.o_name}
              className={style.input}
              onChange={(e) => setObject({ ...object, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='color' className={style.label}>
              衣物颜色
            </label>
            <input
              required
              id='color'
              name='color'
              maxLength={100}
              placeholder='衣物颜色'
              value={object.color}
              className={style.input}
              onChange={(e) => setObject({ ...object, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='location' className={style.label}>
              衣物位置
            </label>
            <input
              required
              id='location'
              name='location'
              maxLength={100}
              placeholder='衣物位置'
              value={object.location}
              className={style.input}
              onChange={(e) => setObject({ ...object, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='broken_info' className={style.label}>
              损坏情况
            </label>
            <input
              id='broken_info'
              name='broken_info'
              maxLength={100}
              placeholder='损坏情况'
              value={object.broken_info}
              className={style.input}
              onChange={(e) => setObject({ ...object, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='broken_date' className={style.label}>
              损坏时间
            </label>
            <input
              id='broken_date'
              name='broken_date'
              type='datetime-local'
              placeholder='损坏时间'
              value={object.broken_date}
              className={style.input}
              onChange={(e) => setObject({ ...object, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='time_create' className={style.label}>
              创建时间
            </label>
            <input
              id='time_create'
              name='time_create'
              type='datetime-local'
              placeholder='创建时间'
              value={object.time_create}
              className={style.input}
              onChange={(e) => setObject({ ...object, [e.target.name]: e.target.value })}
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor='time_update' className={style.label}>
              更新时间
            </label>
            <input
              id='time_update'
              name='time_update'
              type='datetime-local'
              placeholder='更新时间'
              value={object.time_update}
              className={style.input}
              onChange={(e) => setObject({ ...object, [e.target.name]: e.target.value })}
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
            value={object.description}
            className={[style.input, "h-24"].join(" ")}
            onChange={(e) => setObject({ ...object, [e.target.name]: e.target.value })}
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

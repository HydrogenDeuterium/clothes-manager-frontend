import { notFound } from "next/navigation";

import style from "./page.module.css";
import { formatDate } from "@/lib/utils";
import { ObjectType } from "@/lib/utils";
import { joinBackendUrl } from "@/lib/utils";
import { EditButton, AddButton } from "./components";

export default async function Page({ params: { purchaseid } }: { params: { purchaseid: string } }) {
  const res = await fetch(joinBackendUrl([`/purchases/${purchaseid}/objects`]), { cache: "no-store" });
  if (!res.ok) notFound();

  const result = await res.json();
  if (!result.status) notFound();
  if (!result.data.length) return <h1 className='text-gray-700 mt-2 whitespace-nowrap'>暂无数据!</h1>;

  const objects: ObjectType[] = result.data;

  return (
    <>
      <header className='w-full flex flex-row justify-between'>
        <h1 className='text-xl font-semibold text-slate-700'>所有衣物</h1>
        <AddButton purchaseid={Number(purchaseid)} />
      </header>
      <section className='w-full overflow-x-auto'>
        <table className={style.table}>
          <thead>
            <tr>
              <th>衣物名称</th>
              <th>衣物颜色</th>
              <th>衣物简介</th>
              <th>衣物位置</th>
              <th>损坏情况</th>
              <th>损坏时间</th>
              <th>创建时间</th>
              <th>更新时间</th>
              <th>操作按钮</th>
            </tr>
          </thead>

          <tbody>
            {objects.map((item) => (
              <tr key={item.oid}>
                <td>{item.o_name}</td>
                <td>{item.color}</td>
                <td>{item.description}</td>
                <td>{item.location}</td>
                <td>{item.broken_info}</td>
                <td>{item.broken_date}</td>
                <td>{formatDate(item.time_create)}</td>
                <td>{formatDate(item.time_update)}</td>
                <td>
                  <EditButton object={item} purchaseid={Number(purchaseid)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

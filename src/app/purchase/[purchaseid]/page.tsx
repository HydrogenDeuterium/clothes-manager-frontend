import { notFound } from "next/navigation";

import { formatDate } from "@/lib/utils";
import { ObjectType } from "@/lib/utils";
import { joinBackendUrl } from "@/lib/utils";
import { DeleteButton, EditButton } from "./components";

export default async function Page({ params: { purchaseid } }: { params: { purchaseid: string } }) {
  const res = await fetch(joinBackendUrl([`/purchases/${purchaseid}/objects`]), { cache: "no-store" });
  if (!res.ok) notFound();

  const result = await res.json();
  if (!result.status) notFound();
  if (!result.data.length) return <h1 className='text-gray-700 mt-2 whitespace-nowrap'>暂无数据!</h1>;

  const objects: ObjectType[] = result.data;

  return (
    <tbody>
      {objects.map((item) => (
        <tr key={item.oid}>
          <td>{item.o_name}</td>
          <td>{item.color}</td>
          <td>{item.description}</td>
          <td>{item.location}</td>
          <td>{item.broken_date}</td>
          <td>{item.broken_info}</td>
          <td>{formatDate(item.time_create)}</td>
          <td>{formatDate(item.time_update)}</td>
          <td>
            <EditButton />
            <span className='mx-0.5'></span>
            <DeleteButton />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

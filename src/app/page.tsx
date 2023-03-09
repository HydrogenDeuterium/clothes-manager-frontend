import { getServerSession } from "next-auth";

import { PurchaseType } from "@/lib/utils";
import { joinBackendUrl } from "@/lib/utils";
import { PurchaseCard, AddButton } from "./components";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const metadata = {
  title: "Clothes Manager",
  description: "Clothes manager",
  icons: { icon: "/favicon.ico" },
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) return <main className='w-fit text-slate-800'>You need to login to view this page!</main>;

  const res = await fetch(joinBackendUrl(["purchases"]), { cache: "no-store" });
  if (!res.ok) throw new Error("Something went wrong!");

  const result = await res.json();
  if (!result.status) throw new Error("Something went wrong!");

  const purchases: PurchaseType[] = result.data;

  return (
    <main className='frame w-full flex-1 flex flex-col gap-2'>
      <header className='flex flex-row justify-between px-1'>
        <h1 className='text-xl font-semibold text-slate-700'>购物信息</h1>
        <AddButton />
      </header>
      <ul className='flex flex-col gap-2'>
        {purchases.map((item, index) => (
          <PurchaseCard key={item.pid} purchase={item} index={index} />
        ))}
      </ul>
    </main>
  );
}

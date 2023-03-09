import { getServerSession } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const metadata = {
  title: "Clothes Manager",
  description: "Clothes manager",
  icons: { icon: "/favicon.ico" },
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) return <main className='w-fit text-slate-800'>登录后才能查看!</main>;

  return (
    <main>
      <h1>Hello world</h1>
    </main>
  );
}

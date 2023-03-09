import { getServerSession } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const metadata = {
  title: "Clothes Manager",
  description: "Clothes manager",
  icons: { icon: "/favicon.ico" },
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) return <main className='w-fit text-slate-800'>You need to login to view this page!</main>;

  return (
    <main>
      <h1>Hello world</h1>
    </main>
  );
}

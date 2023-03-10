"use client";

import { signIn, signOut, useSession } from "next-auth/react";

function Button({ title, callback }: { title: string; callback: Function }) {
  return (
    <button
      type='button'
      onClick={() => callback()}
      className='py-1 px-4 rounded-sm font-semibold outline outline-1 bg-emerald-600 text-white hover:bg-white hover:text-emerald-600 duration-300'
    >
      {title}
    </button>
  );
}

export default function NormalButtons() {
  const { data: session } = useSession();

  if (session) return <Button title='Logout' callback={signOut} />;
  else return <Button title='Login' callback={signIn} />;
}

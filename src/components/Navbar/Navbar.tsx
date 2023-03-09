import Link from "next/link";
import { TbBrandShopee } from "react-icons/tb";

import { Login } from "@/components";

export default function Navbar() {
  return (
    <nav className='w-full frame flex flex-row items-center justify-between'>
      <Link href='/' aria-label='home page logo link'>
        <TbBrandShopee size={38} />
      </Link>
      <Login />
    </nav>
  );
}

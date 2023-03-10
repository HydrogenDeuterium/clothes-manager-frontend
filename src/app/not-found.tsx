import Link from "next/link";

export default function NotFound() {
  return (
    <main aria-label='404 notfound page' className='flex flex-row items-center justify-center gap-1'>
      <h1 className='text-gray-700'>404 Not found.</h1>
      <Link href='/' className='text-blue-600 md:hover:underline'>
        Go back!
      </Link>
    </main>
  );
}

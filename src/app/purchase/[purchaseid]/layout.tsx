import { ObjectContextProvider } from "./components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full frame flex-1 flex flex-col items-center justify-start gap-1'>
      <ObjectContextProvider>{children}</ObjectContextProvider>
    </main>
  );
}

import style from "./page.module.css";
import { AddButton } from "./components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full frame flex-1 flex flex-col items-center justify-start gap-1'>
      <header className='w-full flex flex-row justify-between'>
        <h1 className='text-xl font-semibold text-slate-700'>所有衣物</h1>
        <AddButton />
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
          {children}
        </table>
      </section>
    </main>
  );
}

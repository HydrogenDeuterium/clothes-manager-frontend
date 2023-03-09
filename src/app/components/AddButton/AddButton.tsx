import { AiOutlinePlusCircle } from "react-icons/ai";

export default function AddButton() {
  return (
    <button
      type='button'
      aria-label='edit button'
      className='text-slate-600 hover:text-slate-800 flex flex-row gap-1 items-center'
    >
      添加
      <AiOutlinePlusCircle size={17} />
    </button>
  );
}

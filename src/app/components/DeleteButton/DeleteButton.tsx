import { MdDelete } from "react-icons/md";

export default function DeleteButton() {
  return (
    <button aria-label='edit button' className='text-slate-600 hover:text-slate-800'>
      <MdDelete />
    </button>
  );
}

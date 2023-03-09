import { MdDelete } from "react-icons/md";

export default function DeleteButton() {
  return (
    <button type='button' aria-label='delete button' className='text-slate-600 hover:text-slate-800'>
      <MdDelete />
    </button>
  );
}

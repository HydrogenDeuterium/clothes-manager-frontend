import { MdModeEditOutline } from "react-icons/md";

export default function EditButton() {
  return (
    <button aria-label='edit button' className='text-slate-700 hover:text-slate-800'>
      <MdModeEditOutline />
    </button>
  );
}

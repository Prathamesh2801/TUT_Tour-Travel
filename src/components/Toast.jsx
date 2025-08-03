import toast from 'react-hot-toast';

export default function Toast({ greet, buttonOption }) {
  const message = (e) => {
    e.preventDefault();
    toast.success(greet);
  };

  return (
    <div>
      <button
        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        onClick={message}
      >
        {buttonOption}
      </button>
    </div>
  );
}

export default function WinModal({ hidden }) {
  return (
    <>
      <div
        className={
          hidden
            ? "hidden"
            : "z-10 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        }
      ></div>
      <div
        className={
          hidden
            ? "opacity-0 fixed"
            : "opacity-100 transition-opacity duration-300 z-20 h-1/3 w-1/2 border-2 border-black bg-white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded shadow-md flex flex-col justify-center items-center gap-1"
        }
      >
        <div>You win!</div>
        <div>Your time is 2:00.</div>
        <div className="text-center">
          Enter your name, then hit submit to save your score.
        </div>
        <form className="flex flex-col gap-2">
          <input type="text" name="name" className="border-2 rounded"></input>
          <button className="bg-red-200 border-2 rounded p-1 self-center">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

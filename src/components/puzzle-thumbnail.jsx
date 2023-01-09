import { Link } from "react-router-dom";

export default function PuzzleThumbnail({ id, src }) {
  return (
    <div className="w-2/3 xl:w-1/2 rounded-2xl border border-zinc-400 shadow-md transition-all ease-in duration-200  hover:scale-105 hover:shadow-xl">
      <Link to={`/puzzles/${id}`}>
        <img src={src} className="rounded-2xl" />
      </Link>
    </div>
  );
}

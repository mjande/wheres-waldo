import PuzzleThumbnail from "../components/puzzle-thumbnail";

import BeachPuzzle from "../assets/thumbnails/ww-beach.jpeg";
import SkiHillPuzzle from "../assets/thumbnails/ww-skihill.jpeg";

export default function Index() {
  return (
    <div className="mt-3 flex flex-col items-center gap-3">
      <PuzzleThumbnail src={BeachPuzzle} id="1" />
      <PuzzleThumbnail src={SkiHillPuzzle} id="2" />
    </div>
  );
}

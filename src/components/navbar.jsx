import WaldoFace from "../assets/waldo-face.png";

export default function Navbar() {
  return (
    <div className="flex items-center gap-4 mt-4">
      <div className="w-20">
        <img src={WaldoFace} className="object-cover" />
      </div>
      <h1 className="text-white font-display text-3xl">Where's Waldo</h1>
    </div>
  );
}

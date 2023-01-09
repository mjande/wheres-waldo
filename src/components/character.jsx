import Svg from "../assets/check-svgrepo-com.svg";

export default function Character({ src, isFound }) {
  return (
    <div
      className={`bg-white border-2 rounded h-full relative ${
        isFound
          ? "transition-colors duration-300 border-green-500"
          : "border-black"
      }`}
    >
      <img src={src} className="h-32 w-24 px-4" alt="Waldo Thumbnail"></img>
      <img
        src={Svg}
        className={`absolute top-2 ${
          isFound
            ? "visible opacity-100 transition-opacity duration-300"
            : "invisible opacity-0"
        }`}
        alt="Checkmark for Waldo"
      />
    </div>
  );
}

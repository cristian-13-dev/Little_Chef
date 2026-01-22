import KitchenCover from "../assets/Kitchen.png";

export default function Kitchen() {
  return (
    <div className="w-screen h-screen">
      <img
        src={KitchenCover}
        alt="Kitchen"
        className="w-full h-full object-cover absolute z-[-1] opacity-90"
      />
    </div>
  );
}

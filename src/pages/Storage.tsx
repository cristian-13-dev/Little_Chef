import StorageCover from "../assets/storage.png";

export default function Storage() {
  return (
    <div className="w-screen h-screen">
      <img
        src={StorageCover}
        alt="Storage"
        className="w-full h-full object-cover absolute z-[-1] opacity-90"
      />
    </div>
  );
}

import RestaurantCover from "../assets/restaurant.png";

export default function Restaurant() {
  return (
    <div className="w-screen h-screen">
      <img
        src={RestaurantCover}
        alt="Restaurant"
        className="w-full h-full object-cover absolute z-[-1] opacity-90"
      />
    </div>
  );
}

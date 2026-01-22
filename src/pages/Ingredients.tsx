import IngredientsCover from "../assets/ingredients.png";

export default function Ingredients() {
  return (
    <div className="w-screen h-screen">
      <img
        src={IngredientsCover}
        alt="Ingredients"
        className="w-full h-full object-cover absolute z-[-1] opacity-90"
      />
    </div>
  );
}

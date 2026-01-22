import IngredientsCover from "../assets/ingredients.png";
import CoverImage from "../components/CoverImage";
import Navigation from "../components/Navigation";

export default function Ingredients() {
  return (
    <div>
      <CoverImage src={IngredientsCover} alt="Ingredients" />
      
      <div className="relative">
        <Navigation />
      </div>
    </div>
  );
}

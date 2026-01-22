import { Link } from "react-router-dom";
import navbarWood from "../assets/Navigation.png";

export default function Navigation() {
  const linkStyle = `
    border-[3px] border-transparent rounded-[10px]
    px-[18px] py-[6px]
    font-semibold text-[#fff6ee]
    bg-[linear-gradient(#5b2f22,#402017),linear-gradient(180deg,#f6d98b_0%,#e0b45c_25%,#b8892e_50%,#f1d27a_75%,#8a641d_100%)]
    [background-clip:padding-box,border-box]
    [background-origin:padding-box,border-box]
  `;

  return (
    <nav
      className="
        w-full
        flex items-center justify-center gap-1
        px-4 py-2
        bg-repeat-x bg-center
      "
      style={{
        backgroundImage: `url(${navbarWood})`,
        backgroundSize: "auto 100%", // 👈 cheia: o singură bucată pe verticală
      }}
    >
      <Link to="/ingredients" className={linkStyle}>
        Ingredients
      </Link>
      <Link to="/kitchen" className={linkStyle}>
        Kitchen
      </Link>
      <Link to="/storage" className={linkStyle}>
        Storage
      </Link>
      <Link to="/restaurant" className={linkStyle}>
        Restaurant
      </Link>
    </nav>
  );
}

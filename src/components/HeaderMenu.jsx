import { useNavigate } from "react-router-dom";
import "../style/headermenu.css";
import { MENUS } from "../util/data";

export default function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <div className="header-menu">
      {MENUS &&
        MENUS.map((type, i) => (
          <button
            key={i}
            value={type.value}
            onClick={() => {
              navigate(`${type.url}`);
            }}
          >
            {type.name}
          </button>
        ))}
    </div>
  );
}

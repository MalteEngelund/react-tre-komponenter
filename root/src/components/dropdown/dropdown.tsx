import { useState } from "react";
import style from './dropdown.module.scss'


/* AI state eksempel */
export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: "200px" }}>
      <button className={style.buttonStyle} onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>

      {isOpen && (
        <ul className={style.dropdownMenu}>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
};


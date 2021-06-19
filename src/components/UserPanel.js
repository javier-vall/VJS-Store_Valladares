import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function UserPanel() {
  return (
    <div className="user-container">
      <ul className="user-menu">
        <li>
          <FontAwesomeIcon icon={faPhoneSquareAlt} />
          Cel: 123456
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faEnvelope} />
            info@empresa.com
          </a>
        </li>
        <li>
          <a href="#">Acceso Usuario:</a>
        </li>
      </ul>
    </div>
  );
}

export default UserPanel;

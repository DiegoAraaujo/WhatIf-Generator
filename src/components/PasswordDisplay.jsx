import "./passwordDisplay.css";
import Icon1 from "../assets/Vector (1).svg";
import Icon2 from "../assets/Vector (2).svg";
import Icon3 from "../assets/Vector.svg";
import EyeIcon from "../assets/eye-show-svgrepo-com 1.svg";
import Button from "./button"
function passwordDisplay() {
  return (
    <div className="passwordDisplay-container">
      <p>Sua nova senha é:</p>
      <div className="password-output">
        <input type="text" disabled value={"12345678"} />
        <img src={EyeIcon} alt="" />
      </div>
      <p className="clear-button">Limpar senha</p>
      <div className="passwordDisplay-icons">
        <img src={Icon1} alt="" className="passwordDisplay-icon" />
        <img src={Icon3} alt="" className="passwordDisplay-icon" />
        <img src={Icon2} alt="" className="passwordDisplay-icon" />
      </div>
    </div>
  );
}

export default passwordDisplay;

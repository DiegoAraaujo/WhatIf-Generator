import PasswordLengthSuggestion from "../components/PasswordLengthSuggestion";
import PasswordOptions from "../components/PasswordOptions";
import PasswordDisplay from "../components/PasswordDisplay";
import PasswordConfigForm from "../components/PasswordConfigForm";
import Button from "../components/button";
import "./passwordStepOne.css";
import { Link } from "react-router-dom";

function passwordStepOne() {
  return (
    <main>
      <h3>Gere sua senha aqui</h3>
      <p>tamanho da senha:</p>
      <div className="size-options">
        <PasswordLengthSuggestion length={4} />
        <PasswordLengthSuggestion length={6} />
        <PasswordLengthSuggestion length={8} />
        <PasswordLengthSuggestion length={10} />
        <PasswordLengthSuggestion length={12} />
      </div>
      <PasswordOptions />
      <Button message={"Gerar senha"} />
      <PasswordDisplay />
      <Link to="/step-two">
        <Button message={"Personalizar senha"} />
      </Link>
    </main>
  );
}

export default passwordStepOne;

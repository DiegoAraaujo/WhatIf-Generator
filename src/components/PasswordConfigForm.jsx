import "./passwordConfigForm.css";
import PasswordOptions from "./PasswordOptions";
function passwordConfigForm() {
  return (
    <div className="passwordConfigForm-container">
      <label htmlFor="numbersAmount">Quantidade de números:</label>
      <PasswordOptions id={"numbersAmount"} />
      <label htmlFor="lettersAmount">Quantidade de letras:</label>
      <PasswordOptions id={"lettersAmount"} />
      <label htmlFor="specialCharsAmount">
        Quantidade de caracteres especiais:
      </label>
      <PasswordOptions id={"specialCharsAmount"} />
    </div>
  );
}

export default passwordConfigForm;

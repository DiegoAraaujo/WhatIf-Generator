import PasswordLengthSuggestion from "./PasswordLengthSuggestion"
import PasswordOptions from "./PasswordOptions"
import PasswordDisplay from "./PasswordDisplay"
import Button from "./button"
import "./passwordStepOne.css"
function passwordStepOne(){
 return(
    <main>
      <h3>Gere sua senha aqui</h3>
      <p>tamanho da senha:</p>
      <div className="size-options">
        <PasswordLengthSuggestion length={4}/>
        <PasswordLengthSuggestion length={6}/>
        <PasswordLengthSuggestion length={8}/>
        <PasswordLengthSuggestion length={10}/>
        <PasswordLengthSuggestion length={12}/>
      </div>
        <PasswordOptions/>
        <Button message={"Gerar senha"}/>
        <PasswordDisplay/>
        <Button message={"Personalizar senha"}/>
        
    </main>
 )
}

export default passwordStepOne;
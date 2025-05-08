import PasswordLengthSuggestion from "../components/PasswordLengthSuggestion"
import PasswordOptions from "../components/PasswordOptions"
import PasswordDisplay from "../components/PasswordDisplay"
import PasswordConfigForm from "../components/PasswordConfigForm"
import Button from "../components/button"
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
        <PasswordConfigForm/>
        <PasswordDisplay/>
        <Button message={"Gerar senha"}/>
        
    </main>
 )
}

export default passwordStepOne;
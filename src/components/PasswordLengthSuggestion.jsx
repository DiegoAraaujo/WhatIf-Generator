import "./passwordLengthSuggestion.css";

function PasswordLengthSuggestion  ({length}){
  return(
    <div className="PasswordLengthContainer">
      <p>{length}</p>
    </div>
  )
}

export default PasswordLengthSuggestion;
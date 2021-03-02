
function Input({label, showError, changeHandler}) {
  return (
    <div>
      <input type="text" name={label} onChange={changeHandler}></input>
          {showError && <div>error {label} too long</div>}
    </div>
  )
}

export default Input



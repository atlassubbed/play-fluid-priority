import { t } from "atlas-relax-jsx-pragmas";
import { obs } from "atlas-munchlax";
import { inputTau } from "../shared";
/**@jsx t*/

const forceBetween = (min, val, max) => {
  val = Number(val);
  return val < min ? min : val > max ? max : val;
}

const Input = obs(({data: {min, max, value, id, label}}) => {
  const setVal = e => {
    value(forceBetween(min, e.target.value, max), inputTau())
  }
  return (
    <div class="input-option">
      <label for={id}>{label}: </label>
      <input class="input" id={id} type="number" min={min} max={max} value={value()} onInput={setVal}/>
    </div>
  )
})

export default Input;
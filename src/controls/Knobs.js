import { t } from "atlas-relax-jsx-pragmas";
import { dim, width, inputTau, networkPeriod, maxTau, tauLevels } from "../shared";
import Input from "./Input";
/**@jsx t*/

const Knobs = () => [
  <h4>edit reactive params</h4>,
  <Input min={-1} max={3e3} value={inputTau} label="Input lag (ms)"/>,
  <Input min={1} max={3e3} value={networkPeriod} label="Count updates every (ms)"/>,
  <Input min={1} max={40} value={dim} label="Dimension"/>,
  <Input min={1e2} max={1e3} value={width} label="Width (px)"/>,
  <Input min={16} max={1e5} value={maxTau} label="Max relaxation (ms)"/>,
  <Input min={1} max={100} value={tauLevels} label="Levels"/>
]

export default Knobs;
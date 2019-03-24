import { t } from "atlas-relax-jsx-pragmas";
import Knobs from "./Knobs";
import Stats from "./Stats";
import About from "./About";
/**@jsx t*/

const Controls = () => (
  <div>
    <h2>fluid priority</h2>
    <Knobs/>
    <Stats/>
    <About/>
  </div>
)

export default Controls;

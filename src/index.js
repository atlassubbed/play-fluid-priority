import { diff } from "atlas-relax";
import { t } from "atlas-relax-jsx-pragmas";
import DOMRenderer from "atlas-mini-dom";
import "./styles.css";
import { mousePos, isTauSplitting } from "./shared";
import Board from "./board";
import Controls from "./controls";
/**@jsx t*/

// play around with rIC rAF for bettr smoothness

const App = () => {
  const initPos = e => {
    isTauSplitting(true);
  }
  const resetPos = e => {
    mousePos(null)
    isTauSplitting(false);
  }
  return (
    <div class="container">
      <Controls/>
      <Board onMouseEnter={initPos} onMouseLeave={resetPos}/>
    </div>
  )
}
diff(
  <App/>, 
  null, 
  new DOMRenderer(document.getElementById("root"))
);

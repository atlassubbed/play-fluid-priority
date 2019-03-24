import { diff } from "atlas-relax";
import { t } from "atlas-relax-jsx-pragmas";
import DOMRenderer from "atlas-mini-dom";
import "./styles.css";
import Board from "./board";
import Controls from "./controls";
/**@jsx t*/

// play around with rIC rAF for bettr smoothness

diff(
  <div class="container">
    <Controls/>
    <Board/>
  </div>, 
  null, 
  new DOMRenderer(document.getElementById("root"))
);

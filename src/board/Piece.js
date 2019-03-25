import { Frame, diff } from "atlas-relax";
import { obs } from "atlas-munchlax";
import { t } from "atlas-relax-jsx-pragmas";
import dot from "atlas-dot";
import { viewCountClient } from "../network";
import { viewCount, numDiffs, mousePos, maxTau, width, tauLevels, pieceWidth } from "../shared";
/**@jsx t*/

const dist = (v1, v2) => {
  const delta = [v1[0] - v2[0], v1[1] - v2[1]];
  return Math.sqrt(dot(delta, delta));
}
// returns the color level and the tau value
const calcTau = (pos, lv) => {
  const t = maxTau(), l = tauLevels(), m = mousePos(), p = pieceWidth();
  return m && (lv = dist(m, pos)/p|0) < l ? [lv, lv*t/l] : [l, t];
}
const sq = w => `width: ${w}px; height: ${w}px;`

// sometimes doing things the "react" way is not practical and
// we need to backdoor the VDOM model and write imperative code
// rendered() is like useLayoutEffect in react; it creates side-effects
// we can safely read and write to the dom in rendered()
class Piece extends Frame {
  rendered(){
    // remember this node's DOM position (mid point in the rect)
    const dom = this._domNode, lvMax = tauLevels();
    const r = dom.getBoundingClientRect();
    const pos = this.pos = [(r.right+r.left)/2, (r.bottom+r.top)/2];
    // calculate the node's color level and tau
    const [ lv, tau ] = calcTau(pos);
    // subscribe to view count using this closure's tau
    viewCountClient.subscribe(() => this.diff(tau));
    // unmount (clean up) the last effect
    diff(null, this.obs);
    const Effect = obs(() => calcTau(pos)[0] !== lv && this.diff(requestAnimationFrame));
    // create effect to update this node if tau/color changes
    this.obs = diff(<Effect/>)
    // apply color to node
    dom.style.backgroundColor = lv >= tauLevels() ?
      `rgb(85,85,255)` : `rgb(45,${Math.floor(255*lv/tauLevels())},45)`;
  }
  render(){
    numDiffs(numDiffs()+1)
    return (
      <div class="piece" style={sq(pieceWidth())} onMouseEnter={() => mousePos(this.pos)}>
        {viewCount()}
      </div>
    )
  }
}

export { Piece as default, sq }

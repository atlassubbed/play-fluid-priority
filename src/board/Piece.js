import { Frame, diff } from "atlas-relax";
import { t } from "atlas-relax-jsx-pragmas";
import { viewCountClient } from "../network";
import { viewCount, numDiffs, mousePos } from "../shared";
import TauProvider from "./TauProvider";

const sq = w => `width: ${w}px; height: ${w}px;`

// example of dumb component that
//   * gets reactive vars passed as props
//   * gets tau/count updates from sideways providers
class Piece extends Frame {
  constructor(temp, plugins){
    super(temp, plugins)
    this.setPos = () => mousePos(this.pos);
  }
  rendered(){ // aka useLayoutEffect
    const r = this._domNode.getBoundingClientRect();
    this.pos = [(r.right+r.left)/2, (r.bottom+r.top)/2];
    this.tauProvider = this.tauProvider || diff(<TauProvider
      getPos={() => this.pos}
      onChange={(tau, level) => {
        if (this.tau = tau, level !== this.level){
          this.level = level;
          this.diff(requestAnimationFrame);
        }
      }}
    />)
  }
  render({data: { size, levels } }){
    numDiffs(numDiffs()+1)
    viewCountClient.subscribe(() => this.diff(this.tau));
    const l = this.level;
    const c = l == null || l >= levels ?
      `rgb(85,85,255)` :
      `rgb(45,${Math.floor(255*l/levels)},45)`
    const s = `${sq(size)} background-color: ${c};`;
    return (
      <div class="piece" style={s} onMouseEnter={this.setPos}>
        {viewCount()}
      </div>
    )
  }
}

export { Piece as default, sq }

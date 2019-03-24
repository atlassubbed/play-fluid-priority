import { obs, comp } from "atlas-munchlax";
import dot from "atlas-dot";
import { mousePos, maxTau, width, tauLevels, pieceWidth } from "../shared";

const dist = (v1, v2) => {
  const delta = [v1[0] - v2[0], v1[1] - v2[1]];
  return Math.sqrt(dot(delta, delta));
}

const TauProvider = obs(({data: { onChange, getPos } }, node) => {
  const t = maxTau(), w = width(), l = tauLevels(), m = mousePos(), p = pieceWidth();
  node.rendered = () => {
    if (!m) return onChange(t, l);
    const d = dist(m, getPos());
    if (d > l*p) return onChange(t, l);
    const tpl = t/l, level = d/p|0
    onChange(level*tpl, level);
  }
})

export default TauProvider;

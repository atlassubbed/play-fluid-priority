import { val, comp } from "atlas-munchlax";

const shouldUpdate = (prev, next) => prev !== next;

// parameters of the system
// these are reactive variables
export const
  mousePos = val(null),
  viewCount = val(0),
  numDiffs = val(0),
  diffsAvoided = val(0),
  dim = val(25, shouldUpdate),
  width = val(650),
  inputTau = val(100),
  networkPeriod = val(17),
  isTauSplitting = val(false),
  tauLevels = val(5),
  maxTau = val(1024),
  // some of these could be computed on-the-fly in components
  // but this demonstrates how one can use derived/computed values
  numCounters = comp((f, n=dim()) => n*n),
  pieceWidth = comp(() => width()/dim()),
  fontSize = comp(() => Math.max(pieceWidth()/3|0, 4))

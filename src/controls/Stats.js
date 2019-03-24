import { t } from "atlas-relax-jsx-pragmas";
import { obs } from "atlas-munchlax";
import { viewCount, numDiffs, numCounters, diffsAvoided } from "../shared";

const Stats = obs(() => [
  <h4>view real-time stats</h4>,
  <div class="mono">
    <p>counters on screen: {numCounters()}</p>
    <p>correct view count: {viewCount()}</p>
    <p>diffs completed: {numDiffs()}</p>
    <p>diffs avoided: {diffsAvoided()}</p>
  </div>
])

export default Stats;
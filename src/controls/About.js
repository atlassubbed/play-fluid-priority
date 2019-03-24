import { t } from "atlas-relax-jsx-pragmas";
import { obs } from "atlas-munchlax"
import { isTauSplitting } from "../shared";
/**@jsx t*/

const About = obs(() => [
  <h4>about</h4>,
  <div class={`${isTauSplitting() ? "" : "no-"}highlight`} style="max-width: 320px; padding: 10px;">
    { isTauSplitting() ?
      "The counters closer to your mouse reflect a more accurate view count because they have a higher priority." :
      "Every counter on the board displays the same (simulated) view count. Try hovering over the board."
    }
  </div>,
  <p>
    made with 💜 <a href="https://github.com/atlassubbed/atlas-relax">relax</a>
  </p>
])

export default About;
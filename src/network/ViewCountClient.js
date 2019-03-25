import { networkPeriod, viewCount, numCounters, diffsAvoided } from "../shared";
import { comp } from "atlas-munchlax";
import { Frame, diff } from "atlas-relax";
import { t } from "atlas-relax-jsx-pragmas";
/**@jsx t*/

// this simulates a socket or long poll over the network for a counter
class ViewCountClient extends Frame {
  subscribe(cb){
    return this.subs.push(cb);
  }
  // if this were a real client, we would
  //   * set up a network subscription/call on the first render
  //   * dump data into a cache
  //   * use render() to poll, longpoll or exponential backoff poll
  //     * simple: just this.diff() at the end of render to reschedule the job
  render(cb){
    const subs = this.subs = this.subs || [];
    diffsAvoided(diffsAvoided() + numCounters() - subs.length)
    viewCount(viewCount() + 1, requestAnimationFrame);
    while(cb = subs.pop()) cb();
    // a dynamic-period setInterval out-of-the-box with relax
    //   * you might notice we aren't observing this reactive variable
    //   * why? hint: we don't need to ;)
    this.diff(networkPeriod());
  }
}

// a separate rooted tree acts as a service
// by diffing the CountClient, we instantiate its rendering cycle
export const viewCountClient = diff(<ViewCountClient/>)

# play-fluid-priority

Variable diffing priority in Relax.

---

<img src="https://user-images.githubusercontent.com/38592371/54886472-9aa66800-4e5e-11e9-8f83-608f701d5d6e.gif">

## live on codesandbox

https://codesandbox.io/s/github/atlassubbed/play-fluid-priority

### what to do

There are lots of parameters to fiddle with:

  1. **Levels:** I'm not going to explain this one. Best to see it in action. Try changing this value and see what happens. Hint: this is what fluid priority is about!
  2. **Input lag:** This defines the debouncing period for entering input. There is no special code to make this work -- it's supported out-of-the-box in Relax with "inner diffs". Input lag might be desired if you have an intense calculation that depends on input, and that input can change very fast. Input lag is often used with textareas to make sure that every single keypress doesn't result in an entire calculatation being re-run on the entire text body.
  3. **Update rate:** This app simulates subscribing to a "view count" number that is getting updated every M milliseconds. You can specify what M is here.
  4. **Dimension:** How many counter views are there on the board? There are `dim^2` counters, since the 4oard is a square.
  5. **Width:** How wide is the board? You can specify a different width if you want.
  6. **Max relaxation:** What is the acceptable refresh rate for the lowest priority counters? You can specify that. Part of the inspiration behind Relax is that sometimes data changes way too fast for users to see those changes. In this case, the UI should not necessarily update for every single little change.


All of these parameters are fully reactive. As soon as you update them, you'll see the changes in real time.

### hint

Try entering bigger numbers for **levels**, **dimension**, and **width** if you wanna see more action.

### made with 💜

[Relax](https://github.com/atlassubbed/atlas-relax)

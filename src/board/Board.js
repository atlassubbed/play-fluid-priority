import { t } from "atlas-relax-jsx-pragmas";
import { obs } from "atlas-munchlax";
import Piece, { sq } from "./Piece";
import { dim, width, fontSize, isTauSplitting, mousePos, tauLevels } from "../shared";
/**@jsx t*/

const initPos = e => isTauSplitting(true);
const resetPos = e => (mousePos(null), isTauSplitting(false));
const Board = obs(() => {
  tauLevels(); // trigger changes when levels change 
  const rows = [];
  for (let i = 0; i < dim(); i++){
    const row = [];
    for (let j = 0; j < dim(); j++)
      row.push(<Piece/>)
    rows.push(row);
  }
  return (
    <div class="board" style={`${sq(width())} font-size: ${fontSize()}px;`}
      onMouseLeave={resetPos} onMouseEnter={initPos}>
      {rows}
    </div>
  )
})

export default Board;

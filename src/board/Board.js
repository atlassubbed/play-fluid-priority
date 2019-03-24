import { t } from "atlas-relax-jsx-pragmas";
import { obs } from "atlas-munchlax";
import Piece, { sq } from "./Piece";
import { dim, width, pieceWidth, fontSize, tauLevels, isTauSplitting, mousePos } from "../shared";
/**@jsx t*/

const initPos = e => {
  isTauSplitting(true);
}
const resetPos = e => {
  mousePos(null)
  isTauSplitting(false);
}
const Board = obs((temp, node) => {
  const rows = [];
  for (let i = 0; i < dim(); i++){
    const row = [];
    for (let j = 0; j < dim(); j++)
      row.push(<Piece size={pieceWidth()} width={width()} levels={tauLevels()}/>)
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

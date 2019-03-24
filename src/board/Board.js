import { t } from "atlas-relax-jsx-pragmas";
import { obs } from "atlas-munchlax";
import Piece, { sq } from "./Piece";
import { dim, width, pieceWidth, fontSize, tauLevels } from "../shared";

const Board = obs((temp, node) => {
  const rows = [];
  for (let i = 0; i < dim(); i++){
    const row = [];
    for (let j = 0; j < dim(); j++)
      row.push(<Piece size={pieceWidth()} width={width()} levels={tauLevels()}/>)
    rows.push(row);
  }
  return (
    <div class="board" style={`${sq(width())} font-size: ${fontSize()}px;`}>
      {rows}
    </div>
  )
})

export default Board;

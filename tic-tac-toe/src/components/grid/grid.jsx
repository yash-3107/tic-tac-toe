import { useState } from "react";
import Cards from "../cards/cards"
import '../grid/grid.css'
import "../helper.js"
function Grid(){
     const [board,setBoard] = useState(Array(9).fill(""));
     const [turn,setTurn] = useState(true)
     const [winner,setWinner] = useState(null);
     function play(index){
        if(turn)
           board[index] = "X";
        else
           board[index] = "O";
        
        let winner = helper(board,(turn)?"X":"O");
        if(winner)
          setWinner[winner];
        setBoard[...board];
        setTurn(!turn);
           
     }
     return(
        <div className="wrapper">
            {
                winner && (
                    <h1>The winner is :(turn)?"X":"O"</h1>
                )
            }
            <h1 className="turn">Current turn of the player with:{(turn) ? "X":"O"}</h1>
            <div className="grid">
             {board.map((x,idx) => <Cards key={idx} onPlay={play} index={idx} name={(turn)?"cross":"circle"}/>)}
            </div>
        </div>
        
        
     )
}
export default Grid;
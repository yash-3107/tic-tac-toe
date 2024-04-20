import { useState } from "react";
import Cards from "../cards/cards.jsx"
import '../grid/grid.css'
import {helper }from "../helper"
function Grid(){
     const [board,setBoard] = useState(Array(9).fill(""));
     const [turn,setTurn] = useState(true);
     const [winner,setWinner] = useState(null);
     function reset(){
                  setBoard(Array(9).fill(""));
                  setTurn(true);
                  setWinner(null);
     }
     function play(index){
        if(turn)
           board[index] = "X";
        else
           board[index] = "O";
        
        let win = helper(board,(turn)?"X":"O");
        if(win){
         setWinner(win);
         return;
        }
          
        setBoard([...board]);
        setTurn(!turn);
           
     }
     return(
        <div className="wrapper">
            {
                winner && (
                  <div>
                       <h1 className="declaration">The winner is :{(turn)?"X":"O"}</h1>
                         <button onClick={reset}>RESET GAME</button>
                  </div>
                    
                )
            }
            <h1 className="turn">Current turn of the player with:{turn? "X":"O"}</h1>
            <div className="table">
             {board.map((x,idx) => <Cards index={idx} onClick={play}  value={x} />)}
            </div>
        </div>
        
        
     )
}
export default Grid;
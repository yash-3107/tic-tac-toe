import "./cards.css"
import Icons from "../icons/icons.jsx"
function Cards({value,onClick,index}){
    let icon = <Icons />;
    if (value === "X")
       icon = <Icons player = "X" />;
    else if(value === "O")
       icon = <Icons player = "O" />;
    return (
        <div className="cards" onClick = {() => {onClick(index)}}>
            {icon}
        </div>);

}
export default Cards;
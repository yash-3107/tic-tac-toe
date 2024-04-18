import "./cards.css"
import Icons from "../icons/icons"
function Cards({name}){
    let icon = <Icons/>;
    if (name == "cross")
       icon = <Icons player = "X"/>;
    else if(name == "circle")
       icon = <Icons player = "O"/>;
    return (
        <div className="cards">
            {icon}
        </div>);

}
export default Cards;
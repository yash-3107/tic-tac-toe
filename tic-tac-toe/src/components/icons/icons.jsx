import { ImCross } from "react-icons/im";
import { FaRegCircle,FaPen } from "react-icons/fa";
function Icons({player}){
            if (player == 'X')
              return <ImCross />;
            else if (player == 'O')
               return <FaRegCircle />;
            else
               return <FaPen/>;
}
export default Icons;
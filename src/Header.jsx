import Arrow from "./Arrow"
import Float from "./float"


function Header(){
    return(
       <div className="relative">
         <Float />
         <div className="absolute top-[80%] left-[90%]">
            <Arrow /> 
         </div>
        
       </div>
    )
}
export default Header
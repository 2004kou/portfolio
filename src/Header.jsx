import Arrow from "./Arrow"
import Float from "./Float"


function Header(){
    return(
       <div className="relative w-5/5 !pt-[40px] md:!pt-[0px] px-6">
         <Float />
         <div className="absolute md:top-[80%] top-[85%] left-[80%] md:left-[90%]">
            <Arrow /> 
         </div>
        
       </div>
    )
}
export default Header
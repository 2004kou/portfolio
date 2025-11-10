import AboutMe from "./AboutMe";
import Footer from "./Footer";
import ReactIcons from "./ReactIcons";
import Work from "./Works";


function Index(){
    return(
        <main className="bg-black">
        <div className="w-full mx-auto">
           <div className="adovanced">
           </div>
           <div className="ml-[80px]  mt-[1000px]">
                <AboutMe></AboutMe>
           </div>

           <div className="flex">  
                <div className="relative">
                    <h2 className="!text-[80px] !font-black text-white mt-[150px] absolute top-5 left-30 z-[999]">Skills</h2>
                    <img className="pb-[250px] !w-3/5 h-fit relative" src="./image/power.jpg" alt="写真"/>
                </div>
                <ReactIcons/>              
           </div>
           <div className="bg-black">
            <Work />
           </div>
           <Footer/>
        </div>
        </main>
    )
}
export default Index


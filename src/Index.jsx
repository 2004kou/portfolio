import AboutMe from "./AboutMe";
import Footer from "./Footer";
import ReactIcons from "./ReactIcons";
import Work from "./Works";


function Index(){
    return(
        <main className="bg-black w-4/5 md:w-5/5 mx-auto">
        <div className="w-full mx-auto">
           <div className="adovanced">
           </div>
                <div className="bg-black">
            <Work />
           </div>
                      <div className="md:flex md:!mt-[300px] text-center md:text-left !mt-[100px]">  
                <div className="relative ">
                    <h2 className="md:!text-[80px] !text-[50px] !font-black text-white mt-[150px] md:absolute md:top-5 md:left-30 md:z-[999]">Skills</h2>
                    <img className="pb-[250px] !w-3/5 h-fit relative hidden md:block" src="./image/power.jpg" alt="写真"/>
                </div>
                <ReactIcons/>              
           </div>
           <div className="md:ml-[80px]  md:mt-[200px] md:w-4/5 mx-auto w-5/5 !mt-[100px]">
                <AboutMe></AboutMe>
           </div>


           <Footer/>
        </div>
        </main>
    )
}
export default Index


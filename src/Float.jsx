import styles from "./Float.module.css";

function Float(){
    return(
       <div className={styles.fluffy }>
            <header className="bg-black w-5/5">
         <div className="w-5/5 h-screen pt-1 pb-10">
            <h1 className="!text-[75px] !font-semibold !px-6 text-white md:!text-[200px] md:!font-black md:px-0">Think. Make. Learn. Repeat.</h1>
            <h2 className="!text-[55px] !font-semibold !px-6 text-outline text-black md:!text-[100px] md:!font-semibold md:font-[Objective-bold] text-transparent stroke-[1px] stroke-wite md:px-0">Kou Inoue's portfolio</h2>
        </div>
        </header>
       </div>
    )
}
export default Float
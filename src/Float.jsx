import styles from "./Float.module.css";

function Float(){
    return(
       <div className={styles.fluffy }>
            <header className="bg-black">
         <div className="w-5/5 h-screen pt-1 pb-10">
            <h1 className="text-white !text-[200px] !font-black">Think. Make. Learn. Repeat.</h1>
            <h2 className="text-outline text-black !text-[100px] !font-semibold font-[Objective-bold] text-transparent stroke-[1px] stroke-wite">Kou Inoue's portfolio</h2>
        </div>
        </header>
       </div>
    )
}
export default Float
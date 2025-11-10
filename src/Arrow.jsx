import styles from "./Arrow.module.css";

function Arrow(){
    return(
       <div className={styles.cp_arrows}>
        <div className={styles.cp_arrow}></div>
        <div className={styles.cp_arrow}></div>
      </div>
    )
}
export default Arrow
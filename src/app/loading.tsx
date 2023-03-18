import styles from "./loading.module.css"

const Loading = () => {
  return (
    <div className={styles.atomSpinner}>
      <div className={styles.spinnerInner}>
        <div className={styles.spinnerLine}></div>
        <div className={styles.spinnerLine}></div>
        <div className={styles.spinnerLine}></div>
        <div className={styles.spinnerCircle}>&#9679;</div>
      </div>
    </div>
  )
}

export default Loading
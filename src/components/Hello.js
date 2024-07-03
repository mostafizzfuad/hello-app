import React from 'react'
import styles from "./hello.module.css"

const Hello = () => {
    return (
        <div>
            <h1 className={styles.heading}>Hello React !!</h1>
            <h3 className={styles.small}>Hello, Mostafizur !!</h3>
        </div>
    )
}

export default Hello
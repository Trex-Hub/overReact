import React from 'react'
import './myStyleSheets.css'
import styles from './myStyleSheets.module.css'

function StyleSheetModule() {

    return (
        <div>
            <h1 className='error'> Error</h1>
            <h1 className={styles.sucess}> Sucess</h1>
        </div>
    )
}

export default StyleSheetModule
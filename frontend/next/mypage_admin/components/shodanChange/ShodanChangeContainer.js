import styles from './ShodanChangeContainer.module.css'
import {React, useState} from "react"
import {SearchContainer, OrderInfoContainer, PartsListContainer, PicturesContainer, EditPartsContainer} from '../common/index'

export default function ShodanChangeContainer(props) {
    const [editBool, setEdit] = useState(false);

    return(
        <div className={styles.container}>
            <SearchContainer></SearchContainer>
            
            <OrderInfoContainer></OrderInfoContainer>

            <PartsListContainer OnClick={() => setEdit(!editBool)}></PartsListContainer>

            <div className={styles.editPartsContainer} style={editBool ? {display:"block"} : {display:"None"}}>
                <PicturesContainer></PicturesContainer>

                <EditPartsContainer></EditPartsContainer>

                <div className={styles.buttonContainer}>
                    <button className={styles.Button}>リセット</button>
                    <button className={styles.Button}>保存</button>
                </div>
            </div>
        </div>
        
    )
}
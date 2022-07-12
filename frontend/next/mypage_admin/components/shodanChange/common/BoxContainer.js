import styles from './BoxContainer.module.css'

export default function BoxContainer(props) {
    return(
        <div className={styles.Container}>
            {props.children}
        </div>
    )
}
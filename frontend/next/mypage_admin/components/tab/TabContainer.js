import styles from './TabContainer.module.css'
export default function TabContainer(props) {
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )
}
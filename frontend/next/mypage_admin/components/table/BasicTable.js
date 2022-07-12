import styles from './BasicTable.module.css'

export default function BasicTable(props) {
    return(
        <table className={styles.Table}>
            {props.children}
        </table>
    )
}
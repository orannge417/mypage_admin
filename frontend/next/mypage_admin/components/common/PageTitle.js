import styles from './PageTitle.module.css'
export default function PageTitle(props) {
    return(
        <div className={styles.titleContainer}>
            <h1 className={styles.pageTitle}>{props.title}</h1>
        </div>
        
    )
}
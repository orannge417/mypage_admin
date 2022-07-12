import styles from './ContainerTitle.module.css'

export default function ContainerTitle(props) {
    return(
        <div className={styles.Title}>
            <p>{props.Title}</p>
        </div>
    )
}
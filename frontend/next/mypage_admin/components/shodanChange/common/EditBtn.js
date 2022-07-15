import styles from './EditBtn.module.css'

export default function EditBtn(props) {
    return(
        <button className={styles.Button} onClick={props.OnClick}>
            編集
        </button>
    )
}
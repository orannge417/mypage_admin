import styles from './TabButton.module.css'
import Link from 'next/link'
export default function TabButton(props) {
    return(
        <div className={styles.container} style={{backgroundColor:props.backColor}}>
            <Link href={props.link}>
                <a>{props.buttonTitle}</a>
            </Link>
        </div>
    )
}
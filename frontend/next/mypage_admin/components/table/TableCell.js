import styles from './TableCell.module.css'

export default function TableCell(props) {
    return(
        <tr className={styles.Tr}>
            <td className={styles.PrimaryTD}>{props.PrimaryTD}</td>
            <td className={styles.SecondaryTD}>
                <input type="text" value={props.Value}
                                    className={styles.Textbox } 
                                    placeholder={props.PlHolder}>
                                    {/* placeholder={props.PlHolder}
                                    onChange={props.OnChange} */}
                </input>
            </td>
        </tr>
    )
}
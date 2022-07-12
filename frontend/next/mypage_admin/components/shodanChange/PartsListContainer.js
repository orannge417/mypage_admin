import styles from './PartsListContainer.module.css'
import {BoxContainer, ContainerTitle, EditBtn} from '../common/index'

export default function PartsListContainer(props) {
    return(
        <BoxContainer>
            <ContainerTitle Title="部品一覧" />

            <table className={styles.Table}>
                <tr>
                    <th className={styles.InquiryDate}>問合せ日</th>
                    <th className={styles.PartsName}>部品名</th>
                    <th className={styles.PartsType}>部品区分</th>
                    <th className={styles.PartsNo}>部品番号</th>
                    <th className={styles.Price}>売値</th>
                    <th className={styles.EditBtn}>編集</th>
                </tr>

                <tr>
                    <td>2022/03/23</td>
                    <td>エキゾーストサイレンサー</td>
                    <td>セミオーバーホール品</td>
                    <td>18030-S3A-010</td>
                    <td>¥37,000</td>
                    <td><EditBtn /></td>
                </tr>

                <tr>
                    <td>2022/03/23</td>
                    <td>エキゾーストサイレンサー</td>
                    <td>セミオーバーホール品</td>
                    <td>18030-S3A-010</td>
                    <td>¥37,000</td>
                    <td><EditBtn /></td>
                </tr>
            </table>
        </BoxContainer>
    )
}
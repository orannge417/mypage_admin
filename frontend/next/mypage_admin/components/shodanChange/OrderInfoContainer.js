import styles from './OrderInfoContainer.module.css'
import {BoxContainer, ContainerTitle, BasicTable, TableCell} from '../common/index'

export default function OrderInfoContainer(props) {
    return(
        <BoxContainer>
            <ContainerTitle Title="商談情報編集" />

            <BasicTable>
                <TableCell PrimaryTD="車台番号" Value="FD3-1100257"/>
                <TableCell PrimaryTD="問合せ部品" Value="エキゾーストサイレンサー"/>
                <TableCell PrimaryTD="問合せ日" Value="2022年3月28日"/>
                <TableCell PrimaryTD="受注日" Value="2022年3月30日"/>
                <TableCell PrimaryTD="受注金額合計" Value="¥12,000"/>
            </BasicTable>
        </BoxContainer>
    )
}
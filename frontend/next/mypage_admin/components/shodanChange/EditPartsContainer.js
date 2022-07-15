import styles from './EditPartsContainer.module.css'
import {BoxContainer, ContainerTitle, BasicTable, TableCell} from '../common/index'

export default function EditPartsContainer(props) {
    return(
        <BoxContainer>
            <ContainerTitle Title="商談URL" />

            <BasicTable>
                <TableCell PrimaryTD="部品名" Value="エキゾーストサイレンサー"/>
                <TableCell PrimaryTD="部品区分" Value="リビルト部品"/>
                <TableCell PrimaryTD="部品番号" Value="45018-S2K-013 / 45013-S2K-023"/>
                <TableCell PrimaryTD="色区分" Value="同色"/>
                <TableCell PrimaryTD="数量" Value="1"/>
                <TableCell PrimaryTD="仕入先" Value="株式会社　ながおテクノ"/>
                <TableCell PrimaryTD="保証先" Value="二年二万キロ"/>
                <TableCell PrimaryTD="問合せ日" Value="2022年3月28日"/>
                <TableCell PrimaryTD="受注日" Value="2022年3月30日"/>
                <TableCell PrimaryTD="売値" Value="¥12,000"/>
            </BasicTable>

        </BoxContainer>
        
    )
}
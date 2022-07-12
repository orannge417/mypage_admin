import styles from './SearchContainer.module.css'
import {BoxContainer, ContainerTitle} from '../common/index'

export default function SearchContainer(props) {
    return(
        <BoxContainer>
            <ContainerTitle Title="商談URL" />

            <div className={styles.SearchContainer}>
                <input type="text" value={props.Value}
                                    className={styles.Textbox } 
                                    placeholder="Salesforceの商談URLを入力してください">
                                    {/* placeholder={props.PlHolder}
                                    onChange={props.OnChange} */}
                </input>

                <button className={styles.Button}>
                    {/* onClick={props.OnClick} */}
                    検索
                </button>

            </div>
        </BoxContainer>
        
    )
}
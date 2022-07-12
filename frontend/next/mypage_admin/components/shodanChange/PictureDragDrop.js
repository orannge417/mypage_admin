import styles from './PictureDragDrop.module.css'
import {BoxContainer, ContainerTitle} from '../common/index'

export default function PictureDragDrop(props) {
    return(
        <div className={styles.PictureDragDrop}>
            <p>ドラッグアンドドロップで画像を追加</p>

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
        
    )
}
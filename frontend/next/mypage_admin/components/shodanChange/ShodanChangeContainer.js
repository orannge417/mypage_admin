import styles from './ShodanChangeContainer.module.css'
import {SearchContainer, OrderInfoContainer, PartsListContainer, PicturesContainer} from '../common/index'

export default function ShodanChangeContainer(props) {
    return(
        <div className={styles.container}>
            <SearchContainer></SearchContainer>
            
            <OrderInfoContainer></OrderInfoContainer>

            <PartsListContainer></PartsListContainer>

            <PicturesContainer></PicturesContainer>
        </div>
        
    )
}